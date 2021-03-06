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
     * @var integer
     *
     * @ORM\Column(name="start_date_year", type="smallint", nullable=false)
     */
    protected $startDateYear;

    /**
     * @var integer
     *
     * @ORM\Column(name="start_date_month", type="smallint", nullable=true)
     */
    protected $startDateMonth;

    /**
     * @var integer
     *
     * @ORM\Column(name="start_date_day", type="smallint", nullable=true)
     */
    protected $startDateDay;

    /**
     * @var integer
     *
     * @ORM\Column(name="end_date_year", type="smallint", nullable=true)
     */
    protected $endDateYear;

    /**
     * @var integer
     *
     * @ORM\Column(name="end_date_month", type="smallint", nullable=true)
     */
    protected $endDateMonth;

    /**
     * @var integer
     *
     * @ORM\Column(name="end_date_day", type="smallint", nullable=true)
     */
    protected $endDateDay;

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
     * Différents groupe de l'album
     * @var ArrayCollection $albumGroups
     *
     * @ORM\OneToMany(targetEntity="Lcdp\CommonBundle\Entity\AlbumGroup", mappedBy="album", cascade={"all"})
     */
    protected $albumGroups;


    /**
     * Constructor
     */
    public function __construct()
    {
        $this->isDeleted = 0;
        $this->isPublished = 0;
        $this->createdAt = new \DateTime();
        $this->modifiedAt = new \DateTime();
        $this->albumGroups = new ArrayCollection();
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
     * Add albumGroups
     *
     * @param \Lcdp\CommonBundle\Entity\AlbumGroup $albumGroups
     * @return Album
     */
    public function addAlbumGroup(\Lcdp\CommonBundle\Entity\AlbumGroup $albumGroups)
    {
        $albumGroups->setAlbum($this);
        $this->albumGroups[] = $albumGroups;

        return $this;
    }

    /**
     * Remove albumGroups
     *
     * @param \Lcdp\CommonBundle\Entity\AlbumGroup $albumGroups
     */
    public function removeAlbumGroup(\Lcdp\CommonBundle\Entity\AlbumGroup $albumGroups)
    {
        $this->albumGroups->removeElement($albumGroups);
    }

    /**
     * Get albumGroups
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAlbumGroups()
    {
        return $this->albumGroups;
    }


    /**
     * @return int
     */
    public function getStartDateYear()
    {
        return $this->startDateYear;
    }

    /**
     * @param int $startDateYear
     * @return Album
     */
    public function setStartDateYear($startDateYear)
    {
        $this->startDateYear = $startDateYear;
        return $this;
    }

    /**
     * @return int
     */
    public function getStartDateMonth()
    {
        return $this->startDateMonth;
    }

    /**
     * @param int $startDateMonth
     * @return Album
     */
    public function setStartDateMonth($startDateMonth)
    {
        $this->startDateMonth = $startDateMonth;
        return $this;
    }

    /**
     * @return int
     */
    public function getStartDateDay()
    {
        return $this->startDateDay;
    }

    /**
     * @param int $startDateDay
     * @return Album
     */
    public function setStartDateDay($startDateDay)
    {
        $this->startDateDay = $startDateDay;
        return $this;
    }

    /**
     * @return int
     */
    public function getEndDateYear()
    {
        return $this->endDateYear;
    }

    /**
     * @param int $endDateYear
     * @return Album
     */
    public function setEndDateYear($endDateYear)
    {
        $this->endDateYear = $endDateYear;
        return $this;
    }

    /**
     * @return int
     */
    public function getEndDateMonth()
    {
        return $this->endDateMonth;
    }

    /**
     * @param int $endDateMonth
     * @return Album
     */
    public function setEndDateMonth($endDateMonth)
    {
        $this->endDateMonth = $endDateMonth;
        return $this;
    }

    /**
     * @return int
     */
    public function getEndDateDay()
    {
        return $this->endDateDay;
    }

    /**
     * @param int $endDateDay
     * @return Album
     */
    public function setEndDateDay($endDateDay)
    {
        $this->endDateDay = $endDateDay;
        return $this;
    }
}
