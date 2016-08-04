<?php

namespace Lcdp\CommonBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class AlbumGroup
 *
 * @ORM\Table(name="album_group")
 * @ORM\Entity(repositoryClass="Lcdp\CommonBundle\Entity\Repository\AlbumGroupRepository")
 * @package Lcdp\CommonBundle\Entity
 */
class AlbumGroup
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    /**
     * Liaison vers la page
     * @var Album $page
     *
     * @ORM\ManyToOne(targetEntity="Lcdp\CommonBundle\Entity\Album", inversedBy="albumGroups")
     * @ORM\JoinColumn(name="album_id", referencedColumnName="id")
     */
    private $album;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text")
     */
    protected $content;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=256)
     */
    protected $title;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    protected $createdAt;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="modified_at", type="datetime", nullable=false)
     */
    protected $modifiedAt;

    /**
     * @var \Boolean
     *
     * @ORM\Column(name="is_deleted", type="boolean", nullable=true)
     */
    protected $isDeleted;

    /**
     * Images liées
     * @var ArrayCollection $pictures
     *
     * @ORM\OneToMany(targetEntity="Lcdp\CommonBundle\Entity\AlbumPicture", mappedBy="albumGroup", cascade={"all"})
     */
    protected $pictures;

    /**
     * Vidéos liées
     * @var ArrayCollection $albumVideos
     *
     * @ORM\OneToMany(targetEntity="AlbumVideo", mappedBy="albumGroup", cascade={"all"})
     */
    protected $albumVideos;

    /**
     * @var Fake Field
     */
    protected $imgFiles;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->isDeleted = false;
        $this->modifiedAt = new \DateTime();
        $this->pictures = new ArrayCollection();
        $this->albumVideos = new ArrayCollection();
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
     * Set title
     *
     * @param string $title
     * @return AlbumVideo
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
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return AlbumGroup
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = empty($createdAt) ? new \DateTime() : $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set modifiedAt
     *
     * @param \DateTime $modifiedAt
     * @return AlbumGroup
     */
    public function setModifiedAt($modifiedAt)
    {
        $this->modifiedAt = $modifiedAt;

        return $this;
    }

    /**
     * Get modifiedAt
     *
     * @return \DateTime
     */
    public function getModifiedAt()
    {
        return $this->modifiedAt;
    }

    /**
     * Set content
     *
     * @param string $content
     * @return AlbumGroup
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set album
     *
     * @param \Lcdp\CommonBundle\Entity\Album $album
     * @return AlbumGroup
     */
    public function setAlbum(\Lcdp\CommonBundle\Entity\Album $album = null)
    {
        $this->album = $album;

        return $this;
    }

    /**
     * Get album
     *
     * @return \Lcdp\CommonBundle\Entity\Album
     */
    public function getAlbum()
    {
        return $this->album;
    }

    /**
     * Add albumVideo
     *
     * @param \Lcdp\CommonBundle\Entity\AlbumVideo $albumVideo
     * @return AlbumGroup
     */
    public function addAlbumVideo(\Lcdp\CommonBundle\Entity\AlbumVideo $albumVideo)
    {
        $this->albumVideos[] = $albumVideo;

        return $this;
    }

    /**
     * Remove albumVideo
     *
     * @param \Lcdp\CommonBundle\Entity\AlbumVideo $albumVideo
     */
    public function removeAlbumVideo(\Lcdp\CommonBundle\Entity\AlbumVideo $albumVideo)
    {
        $this->albumVideos->removeElement($albumVideo);
    }

    /**
     * Get albumVideos
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAlbumVideos()
    {
        return $this->albumVideos;
    }

    /**
     * Add pictures
     *
     * @param \Lcdp\CommonBundle\Entity\AlbumPicture $pictures
     * @return AlbumGroup
     */
    public function addPicture(\Lcdp\CommonBundle\Entity\AlbumPicture $pictures)
    {
        $this->pictures[] = $pictures;

        return $this;
    }

    /**
     * Remove pictures
     *
     * @param \Lcdp\CommonBundle\Entity\AlbumPicture $pictures
     */
    public function removePicture(\Lcdp\CommonBundle\Entity\AlbumPicture $pictures)
    {
        $this->pictures->removeElement($pictures);
    }

    /**
     * Get pictures
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPictures()
    {
        return $this->pictures;
    }

    /**
     * @return Fake
     */
    public function getImgFiles()
    {
        return $this->imgFiles;
    }

    /**
     * @param Fake $imgFiles
     * @return AlbumGroup
     */
    public function setImgFiles($imgFiles)
    {
        $this->imgFiles = $imgFiles;
        return $this;
    }

    /**
     * Set isDeleted
     *
     * @param boolean $isDeleted
     * @return Album
     */
    public function setIsDeleted($isDeleted)
    {
        $this->isDeleted = $isDeleted;

        return $this;
    }

    /**
     * Get isDeleted
     *
     * @return boolean
     */
    public function getIsDeleted()
    {
        return $this->isDeleted;
    }
}
