<?php

namespace Lcdp\CommonBundle\Service;

use Doctrine\ORM\EntityManagerInterface;
use Lcdp\CommonBundle\Entity\Profile;
use Lcdp\CommonBundle\Entity\Repository\UserRepository;
use Symfony\Component\Translation\TranslatorInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Lcdp\CommonBundle\Entity\Person;
use Lcdp\CommonBundle\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoder;
use \Webnet\Bundle\SwissArmyBundle\Util\StringUtils;

/**
 * Gestion des utilisateurs
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class UserService
{
    /**
     * Gestionnaire d'entité
     *
     * @var EntityManagerInterface $em
     */
    protected $em;

    /**
     * Encoder
     *
     * @var UserPasswordEncoder $encoder
     */
    private $encoder;

    /**
     * Service d'export en CSV
     *
     * @var ExportCsvService $csvService
     */
    private $csvService;

    /**
     * Service de traduction
     *
     * @var TranslatorInterface $translator
     */
    protected $translator;

    /**
     * Répository de la classe User
     *
     * @var UserRepository $userRepository
     */
    protected $userRepository;

    /**
     * Constructeur de classe
     *
     * @param EntityManagerInterface $em         Entity Manager
     * @param UserPasswordEncoder    $encoder    Encodeur
     * @param ExportCsvService       $csvService Service d'export en CSV
     * @param TranslatorInterface    $translator Service de traduction
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function __construct(
        EntityManagerInterface $em,
        UserPasswordEncoder $encoder,
        ExportCsvService $csvService,
        TranslatorInterface $translator
    ) {
        $this->em = $em;
        $this->userRepository = $em->getRepository('LcdpCommonBundle:User');
        $this->encoder = $encoder;
        $this->csvService = $csvService;
        $this->translator = $translator;
    }

    /**
     * Récupère un utilisateur
     * Renvoie une erreur si celui-ci n'éxiste pas
     *
     * @param integer $id L'identifiant de l'utilisateur
     * @return User
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getUser($id)
    {
        $entity = $this->userRepository->find($id);

        if (empty($entity)) {
            throw new NotFoundHttpException();
        }

        return $entity;
    }

    /**
     * Modifie le mot de passe d'un utilisateur
     *
     * @param User    $user     Utilisateur
     * @param string  $password Le nouveau mot de passe
     * @param boolean $save     Doit-on sauvegarder l'objet User
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function changeUserPassword(User $user, $password, $save = false)
    {
        // On encode le nouveau mot de passe
        $encodedPassword = $this->encoder->encodePassword($user, $password);

        // On enregistre le nouveau mot de passe encodé
        $user->setPassword($encodedPassword);

        if ($save) {
            $this->save($user);
        }
    }

    /**
     * Recherche un utilisateur valide sur l'application à partir de son email
     *
     * @param  string $email Email d'un utilisateur
     * @return User|null
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function findValidUserByEmail($email)
    {
        // On prépare les filtres
        $filters = array(
            'email' => $email,
            'deleted' => false,
            'status' => User::STATUS_ACCEPTED
        );

        // On recherche l'utilisateur dans la base
        return $this->userRepository->findOneBy($filters);
    }

    /**
     * Recherche un utilisateur valide sur l'application à partir de son email
     *
     * @param  string $login Login d'un utilisateur
     * @return User|null
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function findValidUserByLogin($login)
    {
        // On prépare les filtres
        $filters = array(
            'login' => $login,
            'deleted' => false,
            'status' => User::STATUS_ACCEPTED
        );

        // On recherche l'utilisateur dans la base
        return $this->userRepository->findOneBy($filters);
    }

    /**
     * Recherche un utilisateur valide sur l'application à partir d'un jeton
     * de réinitialisation de mot de passe
     *
     * @param  string $token Jeton de réinitialisation
     * @return User|null
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function findUserByLostPasswordToken($token)
    {
        // On prépare les filtres
        $filters = array(
            'lostPasswordToken' => $token,
            'deleted' => false,
            'status' => User::STATUS_ACCEPTED
        );

        // On recherche l'utilisateur dans la base
        return $this->userRepository->findOneBy($filters);
    }

    /**
     * Sauvegarde un utilisateur
     *
     * @param User $user Utilisateur à sauvegarder
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function save(User $user)
    {
        $this->em->persist($user);
        $this->em->flush();
    }

    /**
     * Crée l'utilisateur fourni en spécifiant un statut en fonction de son role
     *
     * @param  User $user L'utilisateur à supprimer
     * @return User
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function removeUser(User $user)
    {
        $user->setDeleted(true);
        $this->save($user);

        return $user;
    }

    /**
     * Crée l'utilisateur fourni en spécifiant un statut en fonction de son role
     *
     * @param  User $user L'utilisateur à créer
     * @return User
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function createorUpdateUser(User $user)
    {
        if (is_null($user->getId())) {
            // Statut en attente
            $user->setStatus(User::STATUS_ACCEPTED);

            // Jeton de validation
            $user->setAccountValidationToken(StringUtils::generateUid());

            // On définit l'identifiant de connexion de l'utilisateur
            $user->setLogin($this->generateLogin($user->getFirstname(), $user->getLastname(), $user->getEmail()));
        }

        // On encode le password
        if ($user->cannonicalPassword) {
            $this->changeUserPassword($user, $user->cannonicalPassword);
        }

        // Sauvegarde
        $this->save($user);

        return $user;
    }

    /**
     * Retourne un utilisateur vierge
     *
     * @return User
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getEmptyUser()
    {
        $user = new User();
        $user->setRole(User::ROLE_USER);

        return $user;
    }

    /**
     * Renvoi l'ensemble des permissions d'un utilisateur
     *
     * @param User    $user    Objet utilisateur
     * @param boolean $toArray [Optionnel] Sous la forme d'un array texte (sinon objets par défaut)
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getUserPermissions(User $user, $toArray = false)
    {
        return $this->userRepository->getUserPermissions($user, $toArray);
    }

    /**
     * Retourne un tableau contenant les prénoms et noms de utilisateur pour l'autocompletion
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getNamesForAutocomplete()
    {
        $return = array();

        $users = $this->userRepository->findBy(array('deleted' => false));

        foreach ($users as $user) {
            $return['firstNames'][$user->getFirstname()] = $user->getFirstname();
            $return['lastNames'][$user->getLastname()] = $user->getLastname();
        }

        return $return;
    }

    /**
     * Permet de générer un identifiant unique de connexion pour un utilisateur
     *
     * @param string $firstname Prénom de la personne
     * @param string $lastname  Nom de la personne
     * @param string $email     Email de la personne
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function generateLogin($firstname, $lastname, $email)
    {
        $login = strtolower(substr($firstname, 0, 1) . join('_', explode(' ', $lastname)));

        if ($this->userRepository->verifyLoginUnicity($login)) {
            // On retourne le login si celui-ci n'est pas déjà utilisé
            return $login;
        } else {
            $local = explode('@', $email)[0];

            return $this->checkLoginUnicity($local, 0);
        }
    }

    /**
     * Permet de vérifier l'unicité de l'identifiant
     * Fonction récursive
     *
     * @param string  $local Indentifiant à tester
     * @param integer $count Incrémentation de l'id
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    protected function checkLoginUnicity($local, $count)
    {
        if ($count > 0) {
            $login = $local . $count;
        } else {
            $login = $local;
        }

        if ($this->userRepository->verifyLoginUnicity($login)) {
            // On retourne la local si celle-ci n'est pas déjà utilisée
            return $login;
        } else {
            return $this->checkLoginUnicity($local, $count + 1);
        }
    }

    /**
     * Permet de vérifié qu'un token est toujours valide ou aps
     *
     * @param string $token Le token à verifier
     * @return boolean
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function isValidToken($token)
    {
        $return = true;

        $user = $this->userRepository->findBy(array('lostPasswordToken' => $token));

        if (empty($user)) {
            $return = false;
        }

        return $return;
    }
}
