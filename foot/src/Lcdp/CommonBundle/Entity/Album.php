<?php
namespace Lcdp\CommonBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="album")
 * @ORM\Entity(repositoryClass="Lcdp\CommonBundle\Entity\Repository\AlbumRepository")
 */
class Album
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
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=256)
     */
    protected $title;

    /**
     * @var string
     *
     * @ORM\Column(name="slug", type="string", length=256)
     */
    protected $slug;

    /**
     * @var string
     *
     * @ORM\Column(name="intro", type="text", nullable=true)
     */
    protected $intro;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text")
     */
    protected $content;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_date", type="date", nullable=false)
     */
    protected $startDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="end_date", type="date", nullable=true)
     */
    protected $endDate;

    /**
     * @var \Boolean
     *
     * @ORM\Column(name="is_published", type="boolean", nullable=false)
     */
    protected $isPublished;

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
     * @var \DateTime
     *
     * @ORM\Column(name="publicated_at", type="datetime", nullable=true)
     */
    protected $publicatedAt;

    /**
     * @var \Boolean
     *
     * @ORM\Column(name="is_deleted", type="boolean", nullable=false)
     */
    protected $isDeleted;

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
     * Retourne l'élément picture de priorité minimale
     *
     * @return AlbumPicture|false
     */
    public function getMainPicture()
    {
        $picturesArr = $this->getPictures();
        if (empty($picturesArr)) {
            return false;
        }

        $iterator = $picturesArr->getIterator();
        $iterator->uasort(function (AlbumPicture $a, AlbumPicture $b) {
            return ($a->getPriority() < $b->getPriority()) ? -1 : 1;
        });
        $sortedArr = new ArrayCollection(iterator_to_array($iterator));

        return $sortedArr->first();
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->isDeleted = 0;
        $this->isPublished = 0;
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
     * @return Album
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
     * Set slug
     *
     * @param string $slug
     * @return Album
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set intro
     *
     * @param string $intro
     * @return News
     */
    public function setIntro($intro)
    {
        $this->intro = $intro;

        return $this;
    }

    /**
     * Get intro
     *
     * @return string
     */
    public function getIntro()
    {
        return $this->intro;
    }

    /**
     * Set content
     *
     * @param string $content
     * @return Album
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
     * Set startDate
     *
     * @param \DateTime $startDate
     * @return Event
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * Get startDate
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * Set endDate
     *
     * @param \DateTime $endDate
     * @return Event
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * Get endDate
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * Set isPublished
     *
     * @param boolean $isPublished
     * @return Album
     */
    public function setIsPublished($isPublished)
    {
        $this->isPublished = $isPublished;

        return $this;
    }

    /**
     * Get isPublished
     *
     * @return boolean
     */
    public function getIsPublished()
    {
        return $this->isPublished;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Album
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

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
     * @return Album
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
     * Set publicatedAt
     *
     * @param \DateTime $publicatedAt
     * @return Album
     */
    public function setPublicatedAt($publicatedAt)
    {
        $this->publicatedAt = $publicatedAt;

        return $this;
    }

    /**
     * Get publicatedAt
     *
     * @return \DateTime
     */
    public function getPublicatedAt()
    {
        return $this->publicatedAt;
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