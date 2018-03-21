<?php

namespace Lcdp\CommonBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Profile
 * @ORM\Table(name="profile")
 * @ORM\Entity()
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class Profile
{
    const ADMIN = 'Administrateur';
    const AUTHOR = 'Auteur';

    /**
     * Id
     *
     * @var integer $id
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * Titre
     *
     * @var string $title
     * @ORM\Column(type="string", length=255, nullable=false)
     * @Assert\NotBlank(message="Merci de renseigner ce champ.")
     */
    private $title;

    /**
     * Permissions et droits associés des utilisateurs liés à ce profil
     *
     * @var ProfilePermission $permissions
     * @ORM\OneToMany(targetEntity="Lcdp\CommonBundle\Entity\ProfilePermission", mappedBy="profile", cascade={"all"})
     */
    private $permissions;

    /**
     * Utilisateurs utilisant ce profil de droit
     *
     * @var User $users
     * @ORM\ManyToMany(targetEntity="Lcdp\CommonBundle\Entity\User", mappedBy="profiles")
     */
    private $users;

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
     * Constructor
     */
    public function __construct()
    {
        $this->permissions = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    /**
     * Set permissions
     *
     * @param \Doctrine\Common\Collections\ArrayCollection $permissions
     *
     * @return Profile
     */
    public function setPermissions($permissions)
    {
        foreach ($permissions as $permission) {
            $permission->setProfile($this);
        }

        $this->permissions = $permissions;

        return $this;
    }

    /**
     * Add permissions
     *
     * @param \Lcdp\CommonBundle\Entity\ProfilePermission $permissions
     *
     * @return Profile
     */
    public function addPermission(ProfilePermission $permissions)
    {
        $this->permissions[] = $permissions;

        return $this;
    }

    /**
     * Remove permissions
     *
     * @param \Lcdp\CommonBundle\Entity\ProfilePermission $permissions
     */
    public function removePermission(ProfilePermission $permissions)
    {
        $this->permissions->removeElement($permissions);
    }

    /**
     * Get permissions
     *
     * @return ArrayCollection|ProfilePermission
     */
    public function getPermissions()
    {
        return $this->permissions;
    }

    /**
     * Add users
     *
     * @param \Lcdp\CommonBundle\Entity\User $users
     *
     * @return Profile
     */
    public function addUser(User $users)
    {
        $this->users[] = $users;

        return $this;
    }

    /**
     * Remove users
     *
     * @param \Lcdp\CommonBundle\Entity\User $users
     */
    public function removeUser(User $users)
    {
        $this->users->removeElement($users);
    }

    /**
     * Get users
     *
     * @return ArrayCollection|User
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Profile
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Permet de lister tous les profils possible
     *
     * @return array
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getAllProfiles()
    {
        $return = array(
            self::ADMIN,
            self::AUTHOR,
        );

        return $return;
    }
}
