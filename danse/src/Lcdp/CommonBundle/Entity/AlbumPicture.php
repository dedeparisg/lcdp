<?php
namespace Lcdp\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Table(name="picture")
 * @ORM\Entity(repositoryClass="Lcdp\CommonBundle\Entity\Repository\AlbumPictureRepository")
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
     * @ORM\ManyToOne(targetEntity="AlbumGroup", inversedBy="pictures")
     * @ORM\JoinColumn(name="album_group_id", referencedColumnName="id")
     */
    protected $albumGroup;

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
