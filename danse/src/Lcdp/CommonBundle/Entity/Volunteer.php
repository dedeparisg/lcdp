<?php
namespace Lcdp\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;

/**
 * Class Volunteer
 *
 * @ORM\Table(name="volunteer")
 * @ORM\Entity(repositoryClass="Lcdp\CommonBundle\Entity\Repository\VolunteerRepository")
 *
 * @package Lcdp\CommonBundle\Entity
 * @author André Tapia <atapia@webnet.fr>
 */
class Volunteer
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
     * @ORM\Column(name="content", type="text")
     */
    protected $content;

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
     * Constructor
     */
    public function __construct()
    {
        $this->isDeleted = 0;
        $this->isPublished = 0;
        $this->createdAt = new \DateTime();
        $this->modifiedAt = new \DateTime();
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
     * @return News
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
     * Set content
     *
     * @param string $content
     * @return News
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
     * Set isPublished
     *
     * @param boolean $isPublished
     * @return News
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
     * @return News
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
     * @return News
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
     * @return News
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
     * @return News
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
