<?php

namespace Lcdp\CommonBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Permission
 *
 * @ORM\Table(name="permission")
 * @ORM\Entity()
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class Permission
{
    const CONTENT_PAGES = 'CONTENT_PAGES';
    const CONTENT_NEWS = 'CONTENT_NEWS';
    const CONTENT_EVENTS = 'CONTENT_EVENTS';
    const CONTENT_PICTURES = 'CONTENT_PICTURES';
    const CONTENT_VIDEOS = 'CONTENT_VIDEOS';
    const USER_INFOS = 'USER_INFOS';
    const USER_PROFILE = 'USER_PROFILE';
    const NEWSLETTER = 'NESLETTER';
    const MEMBERS = 'MEMBERS';
    const ADMIN_CONFIG = 'ADMIN_CONFIG';

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
     * Titre
     * @var string $title
     *
     * @ORM\Column(type="string", length=255, nullable=false)
     * @Assert\NotBlank(message="Merci de renseigner ce champ.")
     */
    private $title;

    /**
     * Proposer les droits en lecture ?
     * @var boolean $readable
     *
     * @ORM\Column(name="readable", type="boolean")
     */
    private $readable = false;

    /**
     * Proposer les droits en ecriture ?
     * @var boolean $creatable
     *
     * @ORM\Column(name="creatable", type="boolean")
     */
    private $creatable = false;

    /**
     * Proposer les droits en ecriture ?
     * @var boolean $updatable
     *
     * @ORM\Column(name="updatable", type="boolean")
     */
    private $updatable = false;

    /**
     * Proposer les droits en suppression ?
     * @var boolean $deletable
     *
     * @ORM\Column(name="deletable", type="boolean")
     */
    private $deletable = false;

    /**
     * Description de la permission
     * @var string $description
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=false)
     */
    private $description;

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
     * Set title
     *
     * @param string $title
     * @return Ref
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
     * Set readable
     *
     * @param boolean $readable
     * @return Permission
     */
    public function setReadable($readable)
    {
        $this->readable = $readable;

        return $this;
    }

    /**
     * Get readable
     *
     * @return boolean
     */
    public function getReadable()
    {
        return $this->readable;
    }

    /**
     * Set updatable
     *
     * @param boolean $updatable
     * @return Permission
     */
    public function setUpdatable($updatable)
    {
        $this->updatable = $updatable;

        return $this;
    }

    /**
     * Get updatable
     *
     * @return boolean
     */
    public function getUpdatable()
    {
        return $this->updatable;
    }

    /**
     * Get creatable
     *
     * @return boolean
     */
    public function getCreatable()
    {
        return $this->creatable;
    }

    /**
     * Set creatable
     *
     * @param boolean $creatable
     * @return Permission
     */
    public function setCreatable($creatable)
    {
        $this->creatable = $creatable;

        return $this;
    }

    /**
     * Set deletable
     *
     * @param boolean $deletable
     * @return Permission
     */
    public function setDeletable($deletable)
    {
        $this->deletable = $deletable;

        return $this;
    }

    /**
     * Get deletable
     *
     * @return boolean
     */
    public function getDeletable()
    {
        return $this->deletable;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Permission
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Permet de retourner toutes les permissions dans un tableau
     * @return array
     */
    public static function getAllPermissions()
    {
        $return = array(
            self::CONTENT_PAGES => self::CONTENT_PAGES,
            self::CONTENT_NEWS => self::CONTENT_NEWS,
            self::CONTENT_EVENTS => self::CONTENT_EVENTS,
            self::CONTENT_PICTURES => self::CONTENT_PICTURES,
            self::CONTENT_VIDEOS => self::CONTENT_VIDEOS,
            self::USER_INFOS => self::USER_INFOS,
            self::USER_PROFILE => self::USER_PROFILE,
            self::NEWSLETTER => self::NEWSLETTER,
            self::MEMBERS => self::MEMBERS,
            self::ADMIN_CONFIG => self::ADMIN_CONFIG,
        );

        return $return;
    }
}
