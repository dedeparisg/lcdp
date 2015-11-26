<?php

namespace Lcdp\CommonBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\AdvancedUserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * Utilisateur du site
 *
 * @ORM\Table(name="app_user")
 * @ORM\Entity(repositoryClass="Lcdp\CommonBundle\Entity\Repository\UserRepository")
 * @ORM\HasLifecycleCallbacks
 * @UniqueEntity(fields={"login"},  groups={"registration"})
 * @UniqueEntity(fields={"email"}, message="lg.login.email_repeat", groups={"registration"})
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class User implements AdvancedUserInterface
{
    const USER_CRON = 1;
    const STATUS_ACCEPTED = 5;
    const STATUS_REFUSED = 9;
    const ROLE_ADMIN = 'ROLE_ADMIN';
    const ROLE_USER = 'ROLE_USER';

    /**
     * Id
     * @var integer $id
     *
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * Sel d'encryptage du mot de passe
     * @var string $salt
     *
     * @ORM\Column(type="string", length=32, nullable=true)
     */
    private $salt;

    /**
     * Mot de passe encrypté
     * @var string $password
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(min=8, minMessage="lg.user.min.password", groups={"Default", "registration"})
     * @Assert\Regex(pattern="/((.*[A-Z]){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     * @Assert\Regex(pattern="/((.*[a-z]){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     * @Assert\Regex(pattern="/((.*[0-9]){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     * @Assert\Regex(pattern="/((.*\W|_){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     */
    private $password;

    /**
     * @Assert\Length(min=8, minMessage="lg.user.min.password", groups={"Default", "registration"})
     * @Assert\NotBlank(groups={"registration"})
     * @Assert\Regex(pattern="/((.*[A-Z]){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     * @Assert\Regex(pattern="/((.*[a-z]){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     * @Assert\Regex(pattern="/((.*[0-9]){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     * @Assert\Regex(pattern="/((.*\W|_){1,})/", message="lg.login.password_not_valid", groups={"Default", "registration"})
     */
    public $cannonicalPassword;

    /**
     * Email de l'utilisateur
     * @var string $email
     *
     * @ORM\Column(type="string", name="email", length=60, unique=true)
     * @Assert\Email(strict="true")
     * @Assert\NotBlank(groups={"Default", "registration"})
     * @Assert\Length(max=60)
     */
    private $email;

    /**
     * login utilisé pour la connexion de l'utilisateur
     * @var string $login
     *
     * @ORM\Column(type="string", name="login", length=60, unique=true)
     * @Assert\Length(max=60)
     */
    private $login;

    /**
     * L'utilisateur a t'il été supprimé ? (suppression logique uniquement)
     * @var boolean $deleted
     *
     * @ORM\Column(name="deleted", type="boolean", nullable=true)
     */
    private $deleted = false;

    /**
     * L'utilisateur a t'il le droit de se connecté ?
     * @var boolean $locked
     *
     * @ORM\Column(name="locked", type="boolean", nullable=true)
     */
    private $locked = false;

    /**
     * Statut de l'utilisateur
     * @var integer $status
     *
     * @ORM\Column(name="status", type="integer")
     */
    private $status = self::STATUS_REFUSED;

    /**
     * Roles de sécurité de l'utilisateur
     * @var array $roles
     *
     * @ORM\Column(type="array")
     */
    private $roles;

    /**
     * Token de validation du compte
     * @var string
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $accountValidationToken;

    /**
     * Token de réinitialisation de mot de passe
     * @var string $lostPasswordToken
     *
     * @ORM\Column(type="string", length=32, nullable=true)
     */
    private $lostPasswordToken;

    /**
     * Token de réinitialisation de mot de passe
     * @var \DateTime $lostPasswordLastRequest
     *
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $lostPasswordLastRequest;

    /**
     * Nom du collaborateur
     * @var string $firstname
     *
     * @ORM\Column(name="firstname", type="string", length=255, nullable=true)
     * @Assert\Length(max=255)
     * @Assert\NotBlank(groups={"Default", "registration"})
     */
    private $firstname;

    /**
     * Prénom du collaborateur
     * @var string $lastname
     *
     * @ORM\Column(name="lastname", type="string", length=255, nullable=false)
     * @Assert\NotBlank(groups={"Default", "registration"})
     * @Assert\Length(max=255)
     */
    private $lastname;

    /**
     * Profil de l'utilisateur
     * @var Profile $profiles
     *
     * @ORM\ManyToMany(targetEntity="Lcdp\Commonbundle\Entity\Profile", inversedBy="users")
     * @ORM\JoinTable(name="app_user_profile")
     */
    private $profiles;

    /**
     * {@inheritdoc}
     */
    public function getUsername()
    {
        return $this->login;
    }

    /**
     * {@inheritdoc}
     */
    public function eraseCredentials()
    {

    }

    /**
     * Retourne le nom et prénom du l'utilisateur
     *
     * @return string
     */
    public function getFullname()
    {
        return $this->lastname . ' ' . $this->firstname;
    }

    /**
     * Renvoie les rôles
     *
     * @return array
     */
    public static function getAvailableRoles()
    {
        return array(
            self::ROLE_USER => 'lg.common.roles.user',
            self::ROLE_ADMIN => 'lg.common.roles.admin'
        );
    }

    /**
     * Détermine si l'utilisateur en cours est un partenaire
     * @return boolean
     */
    public function isAdmin()
    {
        return $this->getRole() == self::ROLE_ADMIN;
    }

    /**
     * Set role : transforme le string reçu en array
     *
     * @param array $role
     * @return User
     */
    public function setRole($role)
    {
        $this->roles = array($role);

        return $this;
    }

    /**
     * Get role : récupère la première valeur en string de l'array stocké en base
     *
     * @return array
     */
    public function getRole()
    {
        $arrRole = $this->getRoles();
        if ($arrRole) {
            $role = array_shift($arrRole);
        } else {
            $role = '';
        }

        return $role;
    }

    /**
     * Retourne le role de l'utilisateur sous sa forme textuelle
     *
     * @return string
     */
    public function getRoleAsString()
    {
        $availableRoles = $this->getAvailableRoles();

        return (isset($availableRoles[$this->getRole()])) ?
            $availableRoles[$this->getRole()] : '';
    }

    /**
     * <@inherit>
     */
    public function isAccountNonExpired()
    {
        return true;
    }

    /**
     * <@inherit>
     */
    public function isAccountNonLocked()
    {
        return !$this->getLocked();
    }

    /**
     * <@inherit>
     */
    public function isCredentialsNonExpired()
    {
        return true;
    }

    /**
     * <@inherit>
     */
    public function isEnabled()
    {
        return $this->getStatus() == self::STATUS_ACCEPTED
        && !$this->getDeleted();
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->salt = md5(uniqid(null, true));
        $this->profiles = new \Doctrine\Common\Collections\ArrayCollection();
        $this->organizationalEntities = new \Doctrine\Common\Collections\ArrayCollection();
        $this->persons = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Override du toString
     *
     * @return string
     *
     * @author Benjamin Levoir <blevoir@webnet.fr>
     */
    public function __toString()
    {
        return $this->getFullname();
    }

    /**
     * Retourne un array d'informations relatives à  l'utilisateur
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'userId' => $this->getId(),
            'title' => $this->getTitle(),
            'lastname' => $this->getLastname(),
            'firstname' => $this->getFirstname(),
            'email' => $this->getEmail(),
            'login' => $this->getLogin(),
            'exportCsv' => $this->getExportCsv()
        ];
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set salt
     *
     * @param string $salt
     * @return User
     */
    public function setSalt($salt)
    {
        $this->salt = $salt;

        return $this;
    }

    /**
     * Get salt
     *
     * @return string
     */
    public function getSalt()
    {
        return $this->salt;
    }

    /**
     * Set status
     *
     * @param integer $status
     * @return User
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return integer
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Set password
     *
     * @param string $password
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Get login
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set login
     *
     * @param string $login
     * @return User
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get exportCsv
     *
     * @return boolean
     */
    public function getExportCsv()
    {
        return $this->exportCsv;
    }

    /**
     * Set exportCsv
     *
     * @param boolean $exportCsv
     * @return User
     */
    public function setExportCsv($exportCsv)
    {
        $this->exportCsv = $exportCsv;

        return $this;
    }

    /**
     * Set locked
     *
     * @param boolean $locked
     * @return User
     */
    public function setLocked($locked)
    {
        $this->locked = $locked;

        return $this;
    }

    /**
     * Get locked
     *
     * @return boolean
     */
    public function getLocked()
    {
        return $this->locked;
    }

    /**
     * Set deleted
     *
     * @param boolean $deleted
     * @return User
     */
    public function setDeleted($deleted)
    {
        $this->deleted = $deleted;

        return $this;
    }

    /**
     * Get deleted
     *
     * @return boolean
     */
    public function getDeleted()
    {
        return $this->deleted;
    }

    /**
     * Set roles
     *
     * @param array $roles
     * @return User
     */
    public function setRoles($roles)
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * Get roles
     *
     * @return array
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * Set lostPasswordToken
     *
     * @param string $lostPasswordToken
     * @return User
     */
    public function setLostPasswordToken($lostPasswordToken)
    {
        $this->lostPasswordToken = $lostPasswordToken;

        return $this;
    }

    /**
     * Get lostPasswordToken
     *
     * @return string
     */
    public function getLostPasswordToken()
    {
        return $this->lostPasswordToken;
    }

    /**
     * Set accountValidationToken
     *
     * @param boolean $accountValidationToken
     * @return User
     */
    public function setAccountValidationToken($accountValidationToken)
    {
        $this->accountValidationToken = $accountValidationToken;

        return $this;
    }

    /**
     * Get lostPasswordToken
     *
     * @return boolean
     */
    public function getAccountValidationToken()
    {
        return $this->accountValidationToken;
    }

    /**
     * Set firstname
     *
     * @param string $firstname
     * @return User
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname
     *
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set lastname
     *
     * @param string $lastname
     * @return User
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get lastname
     *
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set lost password last request
     *
     * @param \DateTime $lostPasswordLastRequest
     * @return User
     */
    public function setLostPasswordLastRequest($lostPasswordLastRequest)
    {
        $this->lostPasswordLastRequest = $lostPasswordLastRequest;

        return $this;
    }

    /**
     * Get lost password last request
     *
     * @return \DateTime
     */
    public function getLostPasswordLastRequest()
    {
        return $this->lostPasswordLastRequest;
    }

    /**
     * Add profiles
     *
     * @param \Lcdp\CommonBundle\Entity\Profile $profiles
     * @return User
     */
    public function addProfile(\Lcdp\Commonbundle\Entity\Profile $profiles)
    {
        $this->profiles[] = $profiles;

        return $this;
    }

    /**
     * Remove profiles
     *
     * @param \Lcdp\Commonbundle\Entity\Profile $profiles
     */
    public function removeProfile(\Lcdp\Commonbundle\Entity\Profile $profiles)
    {
        $this->profiles->removeElement($profiles);
    }

    /**
     * Get profiles
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getProfiles()
    {
        return $this->profiles;
    }
}
