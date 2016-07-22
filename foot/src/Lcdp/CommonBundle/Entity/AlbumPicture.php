<?php
namespace Lcdp\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="picture")
 * @ORM\Entity
 */
class AlbumPicture
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
     * @ORM\ManyToOne(targetEntity="Album", inversedBy="pictures")
     * @ORM\JoinColumn(name="album_id", referencedColumnName="id")
     */
    protected $album;

    /**
     * Non persisté
     *
     * @var UploadedFile $rawFile
     * @Assert\Image()
     */
    protected $rawFile;

    /**
     * Information alternative de l'image
     * @var string $imgAlt
     *
     * @ORM\Column(name="img_alt", type="string", length=110, nullable=false)
     */
    private $imgAlt;

    /**
     * @var string
     *
     * @ORM\Column(name="priority", type="integer", nullable=true)
     */
    protected $priority;

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
     * Set album
     *
     * @param \Lcdp\CommonBundle\Entity\Album $album
     * @return Image
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
     * Set imgAlt
     *
     * @param string $imgAlt
     * @return Image
     */
    public function setImgAlt($imgAlt)
    {
        $this->imgAlt = $imgAlt;

        return $this;
    }

    /**
     * Get imgAlt
     *
     * @return string
     */
    public function getImgAlt()
    {
        return $this->imgAlt;
    }

    /**
     * Set priority
     *
     * @param integer $priority
     * @return Image
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;

        return $this;
    }

    /**
     * Get priority
     *
     * @return integer
     */
    public function getPriority()
    {
        return $this->priority;
    }
}
