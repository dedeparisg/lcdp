<?php
namespace Lcdp\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class AlbumVideo
 *
 * @ORM\Table(name="album_video")
 * @ORM\Entity(repositoryClass="Lcdp\CommonBundle\Entity\Repository\AlbumVideoRepository")
 * @package Lcdp\CommonBundle\Entity
 */
class AlbumVideo
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
     * Liaison vers le groupe d'un album
     * @var AlbumGroup $albumGroup
     *
     * @ORM\ManyToOne(targetEntity="Lcdp\CommonBundle\Entity\AlbumGroup", inversedBy="albumVideos")
     * @ORM\JoinColumn(name="album_group_id", referencedColumnName="id")
     */
    private $albumGroup;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=256, nullable=true)
     */
    protected $title;

    /**
     * @var string
     *
     * @ORM\Column(name="url", type="string", length=256, nullable=true)
     */
    protected $url;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text", nullable=true)
     */
    protected $content;

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
     * Constructor
     */
    public function __construct()
    {
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
     * Set content
     *
     * @param string $content
     * @return AlbumVideo
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
     * Set albumGroup
     *
     * @param \Lcdp\CommonBundle\Entity\AlbumGroup $albumGroup
     * @return AlbumPicture
     */
    public function setAlbumGroup(\Lcdp\CommonBundle\Entity\AlbumGroup $albumGroup = null)
    {
        $this->albumGroup = $albumGroup;

        return $this;
    }

    /**
     * Get albumGroup
     *
     * @return \Lcdp\CommonBundle\Entity\AlbumGroup
     */
    public function getAlbumGroup()
    {
        return $this->albumGroup;
    }

    /**
     * Get Url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set Url
     *
     * @param string $url
     * @return Albumvideo
     */
    public function setUrl($url)
    {
        $this->url = $url;
        return $this;
    }
}
