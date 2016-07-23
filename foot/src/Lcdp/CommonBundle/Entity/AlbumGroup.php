<?php
namespace Lcdp\CommonBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class AlbumGroup
 *
 * @ORM\Table(name="album_group")
 * @ORM\Entity
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
     * @ORM\ManyToOne(targetEntity="Lcdp\CommonBundle\Entity\Album", inversedBy="albumVideos")
     * @ORM\JoinColumn(name="album_id", referencedColumnName="id")
     */
    private $album;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=256, nullable=true)
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
     * Images liées
     * @var ArrayCollection $pictures
     *
     * @ORM\OneToMany(targetEntity="Lcdp\CommonBundle\Entity\AlbumPicture", mappedBy="album", cascade={"persist"})
     */
    protected $pictures;

    /**
     * Vidéos liées
     * @var ArrayCollection $albumVideos
     *
     * @ORM\OneToMany(targetEntity="AlbumVideo", mappedBy="album", cascade={"all"})
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
     * @return AlbumVideo
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
     * @return AlbumVideo
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
     * Set album
     *
     * @param \Lcdp\CommonBundle\Entity\Album $album
     * @return AlbumVideo
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
     * @return Album
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
     * @return Album
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
     * @return Album
     */
    public function setImgFiles($imgFiles)
    {
        $this->imgFiles = $imgFiles;
        return $this;
    }
}
