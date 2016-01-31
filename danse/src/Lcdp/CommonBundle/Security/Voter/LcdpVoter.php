<?php

namespace Lcdp\CommonBundle\Security\Voter;

use Symfony\Component\Security\Core\Authorization\Voter\VoterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use \Lcdp\CommonBundle\Service\UserService;

/**
 * Votant pour les droits de l'application Unapei
 */
class LcdpVoter implements VoterInterface
{
    const UNAPEI_ROLE_PREFIX = 'UNAPEI_';
    const UNAPEI_ROLE_READ_SUFFIX = 'READ';
    const UNAPEI_ROLE_CREATE_SUFFIX = 'CREATE';
    const UNAPEI_ROLE_UPDATE_SUFFIX = 'UPDATE';
    const UNAPEI_ROLE_DELETE_SUFFIX = 'DELETE';
    const UNAPEI_ROLE_USER_ACCESS = 'CHECK_USER_ACCESS';

    /**
     * Cache facultatif des permissions (la session de l'utilisateur courant par défaut)
     *
     * @var \Symfony\Component\HttpFoundation\Session\Session
     */
    protected $cache;

    /**
     * Manager des utilisateurs
     * @var \Unapei\Bundle\CoreBundle\Service\UserService
     */
    protected $userManager;

    /**
     * Constructeur du voteur
     *
     * @param \Unapei\Bundle\CoreBundle\Service\UserService $userManager  Manager des utilisateurs
     * @param mixed                                         $cache        Session
     */
    public function __construct(UserService $userManager, $cache)
    {
        $this->userManager = $userManager;
        $this->cache = $cache;
    }

    /**
     * Checks if the voter supports the given attribute.
     *
     * @param string $attribute An attribute
     * @return Boolean true if this Voter supports the attribute, false otherwise
     */
    public function supportsAttribute($attribute)
    {
        return 0 === strpos($attribute, self::UNAPEI_ROLE_PREFIX);
    }

    /**
     * Checks if the voter supports the given class.
     *
     * @param string $class A class name
     * @return Boolean true if this Voter can process the class
     */
    public function supportsClass($class)
    {
        return true;
    }

    /**
     * Returns the vote for the given parameters.
     *
     * This method must return one of the following constants:
     * ACCESS_GRANTED, ACCESS_DENIED, or ACCESS_ABSTAIN.
     *
     * @param TokenInterface $token      A TokenInterface instance
     * @param object         $object     The object to secure
     * @param array          $attributes An array of attributes associated with the method being invoked
     *
     * @return integer either ACCESS_GRANTED, ACCESS_ABSTAIN, or ACCESS_DENIED
     */
    public function vote(TokenInterface $token, $object, array $attributes)
    {
        $result = VoterInterface::ACCESS_ABSTAIN;

        foreach ($attributes as $attribute) {
            if (!$this->supportsAttribute($attribute)) {
                continue;
            }

            // On vérifie que l'utilisateur est authentifié
            $user = $token->getUser();

            if (!$user) {
                $result = VoterInterface::ACCESS_DENIED;
                continue;
            }

            // On vérifie que l'utilisateur possède la permission demandée
            if ($this->hasPermission($user, $attribute, $object)) {
                return VoterInterface::ACCESS_GRANTED;
            } else {
                $result = VoterInterface::ACCESS_DENIED;
            }
        }

        return $result;
    }

    /**
     * Vérifie que l'utilisateur courant possède une autorisation
     *
     * @param object $user        Utilisateur courant
     * @param string $featureCode Code de la permission à vérifier
     * @param object $object      Objet sur lequel l'accès est demandé
     * @return boolean
     */
    protected function hasPermission($user, $featureCode, $object)
    {
        // On supprime le préfixe du code de la feature
        $featureCode = substr($featureCode, strlen(self::UNAPEI_ROLE_PREFIX));

        // Cas particulier de l'accès à un utilisateur
        if ($featureCode == self::UNAPEI_ROLE_USER_ACCESS) {
            return $this->userManager->hasUserAccessToPerimeter($user, $object);
        }

        // On récupère les permissions de l'utilisateur courant
        $userPermissions = $this->cache ? $this->cache->get('userPermissions', array()) : array();

        if (empty($userPermissions)) {
            $userPermissions = $this->userManager->getUserPermissions($user, true);

            // Cache en session
            if ($this->cache) {
                $this->cache->set('userPermissions', $userPermissions);
            }
        }

        // On supprime le préfixe du code de la feature et on récupère le dernier élément du code
        $parts = explode('_', $featureCode);
        $lastPart = end($parts);

        // La permission est-elle générique ou sur une action particulière ?
        if (in_array($lastPart, array(self::UNAPEI_ROLE_READ_SUFFIX, self::UNAPEI_ROLE_CREATE_SUFFIX, self::UNAPEI_ROLE_UPDATE_SUFFIX, self::UNAPEI_ROLE_DELETE_SUFFIX))) {
            $featureCode = substr($featureCode, 0, 0 - (strlen($lastPart) + 1));

            return $userPermissions[$featureCode][$lastPart];
        } else {
            $hasPermission = false;

            array_walk($userPermissions[$featureCode], function ($value) use (&$hasPermission) {
                $hasPermission = $value ? true : $hasPermission;
            });

            return $hasPermission;
        }

        return $userPermissions;
    }
}
