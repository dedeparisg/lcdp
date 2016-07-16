<?php

namespace Lcdp\CommonBundle\Service;

use Psr\Log\LoggerInterface;

/**
 * Class LostPasswordService
 * Service gérant les demandes de mot de passe perdus
 *
 * @author André Tapia <atapia@webnet.fr>
 * @package Lcdp\CommonBundle\Service
 */
class LostPasswordService
{
    /**
     * Service User
     *
     * @var \Lcdp\CommonBundle\Service\UserService $users
     */
    private $users;

    /**
     * Service de mail
     *
     * @var MailerService $mailer
     */
    private $mailer;

    /**
     * Service de log
     *
     * @var LoggerInterface $logger
     */
    protected $logger;

    /**
     * Constructeur du service
     *
     * @param UserService         $users      Service de gestion des utilisateurs
     * @param MailerService       $mailer     Service de mail
     * @param LoggerInterface     $logger     Service de log
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function __construct(
        UserService $users = null,
        MailerService $mailer = null,
        LoggerInterface $logger = null
    ) {
        $this->users = $users;
        $this->mailer = $mailer;
        $this->logger = $logger;
    }

    /**
     * Recherche d'un utilisateur valide à partir de son email et initie le renouvellement du mot de passe
     *
     * @param string $email Email de l'utilisateur initiant la demande
     * @throws \Exception
     * @return boolean
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function handleRequest($email)
    {
        // On recherche un utilisateur correspondant
        $user = $this->users->findValidUserByEmail($email);

        if (empty($user)) {
            throw new \Exception("Compte introuvable.");
        }

        // On génère un nouveau jeton
        $user->setLostPasswordToken(md5(uniqid(null, true)));
        $user->setLostPasswordLastRequest(new \DateTime());

        try {
            // On envoie le mail
            $this->mailer->sendMessage(
                $user->getEmail(),
                ':Email:lostPassword.html.twig',
                compact('user')
            );

            $this->users->save($user);
        } catch (\Exception $e) {
            $this->logger->error(
                "Erreur lors de la (ré)initialisation du mot de passe",
                array('message' => $e->getMessage())
            );

            throw new \Exception("Une erreur s'est produite, merci de contacter un administrateur.");
        }

        return true;
    }

    /**
     * Modifie le mot de passe d'un utilisateur grâce à un jeton de réinitialisation
     *
     * @param string $token    Jeton de réinitialisation
     * @param string $password Nouveau mot de passe de l'utilisateur
     * @throws \Exception
     * @return boolean
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function changePassword($token, $password)
    {
        // On recherche un utilisateur correspondant
        $user = $this->users->findUserByLostPasswordToken($token);

        // On vérifie que le jeton était valide
        if (empty($user)) {
            throw new \Exception('Ce lien n\'est plus valable.');
        }

        // Date maximale de validité du token
        $maxValidity = $user->getLostPasswordLastRequest()->add(new \DateInterval('P2D'));
        $now = new \DateTime();
        if ($maxValidity < $now) {
            throw new \Exception('Ce lien n\'est plus valable.');
        }

        try {
            // On modifie le mot de passe de l'utilisateur
            $this->users->changeUserPassword($user, $password, true);

            // On supprime le jeton
            $user->setLostPasswordToken(null);
            $user->setLostPasswordLastRequest(null);

            $this->users->save($user);
        } catch (\Exception $e) {
            $this->logger->error(
                "Erreur lors du changement de mot de passe",
                array(
                    'message' => $e->getMessage(),
                    'userData' => $user
                )
            );
            throw new \Exception("Une erreur s'est produite, merci de contacter un administrateur.");
        }

        return true;
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
        return $this->users->isValidToken($token);
    }
}
