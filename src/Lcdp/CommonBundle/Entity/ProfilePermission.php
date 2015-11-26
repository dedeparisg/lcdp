<?php
/**
 * Created by PhpStorm.
 * User: atapia
 * Date: 21/11/2015
 * Time: 07:42
 */

namespace Lcdp\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Niveaux de droits sur une permission d'un profil de droit
 *
 * @ORM\Table(name="profile_permission")
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class ProfilePermission
{
    /**
     * Profil de droit
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="Lcdp\Commonbundle\Entity\Profile", inversedBy="permissions")
     * @ORM\JoinColumn(name="profile_id", referencedColumnName="id", nullable=false)
     */
    private $profile;

    /**
     * Permission
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="Lcdp\Commonbundle\Entity\Permission")
     * @ORM\JoinColumn(name="permission_id", referencedColumnName="id", nullable=false)
     */
    private $permission;

    /**
     * Droit en lecture
     * @var boolean $read
     *
     * @ORM\Column(name="can_read", type="boolean")
     */
    private $read = false;

    /**
     * Droit en écriture
     * @var boolean $create
     *
     * @ORM\Column(name="can_create", type="boolean")
     */
    private $create = false;

    /**
     * Droit en écriture
     * @var boolean $update
     *
     * @ORM\Column(name="can_update", type="boolean")
     */
    private $update = false;

    /**
     * Droit en suppression
     * @var boolean $delete
     *
     * @ORM\Column(name="can_delete", type="boolean")
     */
    private $delete = false;

    /**
     * Vérifie que la lecture est induite pour les autorisations de niveaux supérieurs
     *
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function checkReadValue()
    {
        if ($this->update || $this->delete) {
            $this->read = true;
        }
    }

    /**
     * Retourne l'objet sous forme de tableau
     *
     * @return array
     */
    public function toArray()
    {
        return array(
            'id' => $this->getPermission()->getId(),
            'read' => $this->getRead(),
            'create' => $this->getCreate(),
            'update' => $this->getUpdate(),
            'delete' => $this->getDelete()
        );
    }

    /**
     * Set read
     *
     * @param boolean $read
     * @return ProfilePermission
     */
    public function setRead($read)
    {
        $this->read = $read;

        return $this;
    }

    /**
     * Get read
     *
     * @return boolean
     */
    public function getRead()
    {
        return $this->read;
    }

    /**
     * Set update
     *
     * @param boolean $update
     * @return ProfilePermission
     */
    public function setUpdate($update)
    {
        $this->update = $update;

        return $this;
    }

    /**
     * Get update
     *
     * @return boolean
     */
    public function getUpdate()
    {
        return $this->update;
    }

    /**
     * Get create
     *
     * @return boolean
     */
    public function getCreate()
    {
        return $this->create;
    }

    /**
     * Set create
     *
     * @param boolean $create
     * @return ProfilePermission
     */
    public function setCreate($create)
    {
        $this->create = $create;

        return $this;
    }

    /**
     * Set delete
     *
     * @param boolean $delete
     * @return ProfilePermission
     */
    public function setDelete($delete)
    {
        $this->delete = $delete;

        return $this;
    }

    /**
     * Get delete
     *
     * @return boolean
     */
    public function getDelete()
    {
        return $this->delete;
    }

    /**
     * Set profile
     *
     * @param \Lcdp\Commonbundle\Entity\Profile $profile
     * @return ProfilePermission
     */
    public function setProfile(\Lcdp\Commonbundle\Entity\Profile $profile)
    {
        $this->profile = $profile;

        return $this;
    }

    /**
     * Get profile
     *
     * @return \Lcdp\Commonbundle\Entity\Profile
     */
    public function getProfile()
    {
        return $this->profile;
    }

    /**
     * Set permission
     *
     * @param \Lcdp\Commonbundle\Entity\Permission $permission
     * @return ProfilePermission
     */
    public function setPermission(\Lcdp\Commonbundle\Entity\Permission $permission)
    {
        $this->permission = $permission;

        return $this;
    }

    /**
     * Get permission
     *
     * @return \Lcdp\Commonbundle\Entity\Permission
     */
    public function getPermission()
    {
        return $this->permission;
    }
}
