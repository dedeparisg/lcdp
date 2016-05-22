<?php
namespace Lcdp\CommonBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="page")
 * @ORM\Entity(repositoryClass="Lcdp\CommonBundle\Entity\Repository\PageRepository")
 */
class Page
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
     * @ORM\Column(name="is_published", type="boolean", nullable=false)
     */
    protected $isPublished;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="publicated_at", type="datetime", nullable=true)
     */
    protected $publicatedAt;

    /**
     * @var \Boolean
     *
     * @ORM\Column(name="can_be_deleted", type="boolean", nullable=false)
     */
    protected $canBeDeleted;

    /**
     * @var smallint $position
     *
     * @ORM\Column(name="position", type="smallint", nullable=false)
     */
    protected $position;

    /**
     * @var \Boolean
     *
     * @ORM\Column(name="is_deleted", type="boolean", nullable=false)
     */
    protected $isDeleted;

    /**
     * Liaison vers les contenus des pages
     * @var ArrayCollection $pageContents
     *
     * @ORM\OneToMany(targetEntity="Lcdp\CommonBundle\Entity\PageContent", mappedBy="page", cascade={"all"})
     */
    protected $pageContents;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->isDeleted = 0;
        $this->isPublished = 0;
        $this->canBeDeleted = true;
        $this->createdAt = new \DateTime();
        $this->modifiedAt = new \DateTime();
        $this->pageContents = new ArrayCollection();
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
     * @return StaticContent
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
     * @return StaticContent
     */
    public function setCreatedAt($createdAt)
    {
        $createdAt = new \DateTime();

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
     * @return StaticContent
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
     * Set isDeleted
     *
     * @param boolean $isDeleted
     * @return StaticContent
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
     * Set publicatedAt
     *
     * @param \DateTime $publicatedAt
     * @return Page
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
     * Set canBeDeleted
     *
     * @param boolean $canBeDeleted
     * @return Page
     */
    public function setCanBeDeleted($canBeDeleted)
    {
        $this->canBeDeleted = $canBeDeleted;

        return $this;
    }

    /**
     * Get canBeDeleted
     *
     * @return boolean
     */
    public function getCanBeDeleted()
    {
        return $this->canBeDeleted;
    }

    /**
     * Set isPublished
     *
     * @param boolean $isPublished
     * @return Page
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
     * Add pageContents
     *
     * @param PageContent $pageContents
     * @return Person
     */
    public function addPageContent(PageContent $pageContents)
    {
        $pageContents->setPage($this);
        $this->pageContents[] = $pageContents;

        return $this;
    }

    /**
     * Remove pageContents
     *
     * @param PageContent $pageContents
     */
    public function removePageContent(PageContent $pageContents)
    {
        $this->pageContents->removeElement($pageContents);
    }

    /**
     * Get pageContents
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getPageContents()
    {
        return $this->pageContents;
    }

    /**
     * @return smallint
     */
    public function getPosition()
    {
        return $this->position;
    }

    /**
     * @param smallint $position
     */
    public function setPosition($position)
    {
        $this->position = $position;
    }

    /**
     * Set slug
     *
     * @param string $slug
     * @return News
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
}
