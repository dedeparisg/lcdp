<?php

namespace Lcdp\CommonBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Lcdp\CommonBundle\Entity\GraphPermission;
use Lcdp\CommonBundle\Entity\Profile;
use Lcdp\CommonBundle\Entity\User;

/**
 * Chargement des utilisateurs de test
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class LoadUserData implements FixtureInterface, ContainerAwareInterface, OrderedFixtureInterface
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * @var array $profiles
     */
    protected $profiles;

    /**
     * Constructeur de classe
     */
    public function _constructor()
    {
        $this->profiles = array();
    }

    /**
     * {@inheritDoc}
     */
    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $this->createUser($manager, 'cron@lcdp.fr', 'cron@lcdp.fr', 'Cr0nP4s$word#2016', User::ROLE_USER, 'Cron', 'Cron', array());
        $this->createUser($manager, 'admin', 'dev.andre.tapia@gmail.com', 'admin', User::ROLE_ADMIN, 'Administrateur', 'LCDP', array(Profile::ADMIN));
        $this->createUser($manager, 'fbienvenu', 'leclubdespaquerettes@gmail.com', 'LCDPadmin2016!', User::ROLE_ADMIN, 'Fatima', 'Bienvenu', array(Profile::ADMIN));
        $this->createUser($manager, 'vcarrier', 'val.carrier94@gmail.com', 'LCDPadmin2016!', User::ROLE_ADMIN, 'Valérie', 'Carrier', array(Profile::ADMIN));
        $this->createUser($manager, 'mjunk', 'michele.junk@sfr.fr', 'LCDPadmin2016!', User::ROLE_ADMIN, 'Michele', 'Junk', array(Profile::ADMIN));

        // Si on est pas en environnement de developpement, on coupe le traitement
        if (!in_array($this->container->get('kernel')->getEnvironment(), array('dev'))) {
            $manager->flush();
            return $this;
        }

        $this->createUser($manager, 'auteur', 'atapia@webnet.fr', 'auteur', User::ROLE_USER, 'André', 'Tapia', array(Profile::AUTHOR));

        $manager->flush();
    }

    /**
     * Créer un utilisateur à partir des informations fournies
     *
     * @param ObjectManager $manager    Manager d'entités
     * @param string $login             Nom d'utilisateur
     * @param string $email             Email de l'utilisateur
     * @param string $password          Mot de passe en clair
     * @param string $role              Role
     * @param string $firstName         Prénom
     * @param string $lastName          Nom de famille
     * @param array $profileTitles      Nom du profile
     *
     * @return User
     */
    private function createUser($manager, $login, $email, $password, $role, $firstName, $lastName, $profileTitles)
    {
        $user = new User();
        $user->setEmail($email);
        $user->setLogin($login);
        $user->setRole($role);
        $user->setStatus(User::STATUS_ACCEPTED);
        $user->setFirstname($firstName);
        $user->setLastname($lastName);

        // On va récupérer les profiles à lui affecter
        foreach ($profileTitles as $profileTitle) {
            if (!isset($this->profiles[$profileTitle])) {
                $this->profiles[$profileTitle] = $manager->getRepository("LcdpCommonBundle:Profile")->findOneBy(array('title' => $profileTitle));
            }

            $user->addProfile($this->profiles[$profileTitle]);
        }

        // Mot de passe encodé
        $encodedPassword = $this->container->get('security.password_encoder')->encodePassword($user, $password);
        $user->setPassword($encodedPassword);

        $manager->persist($user);
        return $user;
    }

    /**
     * {@inheritDoc}
     */
    public function getOrder()
    {
        return 4; // l'ordre dans lequel les fichiers sont chargés
    }
}
