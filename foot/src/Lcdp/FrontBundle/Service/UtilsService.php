<?php

namespace Lcdp\FrontBundle\Service;

use Doctrine\ORM\EntityManager;
use Webnet\Bundle\SwissArmyBundle\Util\StringUtils;

/**
 * Class UtilsService
 *
 * @package Lcdp\FrontBundle\Service
 */
class UtilsService
{
    /**
     * @var EntityManager $em
     */
    protected $em;

    /**
     * UtilsService constructor.
     *
     * @param EntityManager $em Le gestionnaire d'entité
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * Permet de générer un slug en s'assurant de l'unicité de celui-ci
     *
     * @param string $contentType Type de contenu
     * @param mixed  $object      Titre à slugifier
     * @return string
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function generateSlug($contentType, $object)
    {
        $slug = StringUtils::slugify($object->getTitle());
        $content = $this->em->getRepository('LcdpCommonBundle:' . $contentType)->getList(array('slug' => $slug));

        if (!empty($content)) {
            $pass = true;
            foreach ($content as $item) {
                if ($item['id'] !== $object->getId()) {
                    $pass = $pass && false;
                } else {
                    return $object->getSlug();
                }
            }

            if (!$pass) {
                for ($i = 0; $i < 1000; $i++) {
                    $tmpSlug = $slug;
                    if ($i > 0) {
                        $tmpSlug .= '-' . $i;
                    }

                    $content = $this->em->getRepository('LcdpCommonBundle:' . $contentType)->findBy(
                        array('slug' => $tmpSlug)
                    );

                    if (empty($content)) {
                        return $tmpSlug;
                    }
                }
            }
        }

        return $slug;
    }

    /**
     * Permet de créer les vignettes à chaque upload d'image
     *
     * @param string  $sourceImagePath      Chemin d'accès à l'image originale (sur le serveur)
     * @param string  $destinationImagePath Chemin de destination de l'image redimensionné (sur le serveur)
     * @param string  $maxWidth             Largeur de l'image voulue
     * @param string  $maxHeight            Hauteur de l'image voulue (facultatif)
     * @param boolean $isWatermarked        Doit-on watermarquer l'image ?
     * @param boolean $isCrop               Doit-on cropper l'image ?
     *
     * @return boolean
     */
    public function resizeImage(
        $sourceImagePath,
        $destinationImagePath,
        $maxWidth = null,
        $maxHeight = null,
        $isWatermarked = false,
        $isCrop = false
    ) {
        if (empty($sourceImagePath) || !file_exists($sourceImagePath) || is_dir($sourceImagePath) || (empty($maxWidth) && !empty($maxHeight))) {
            die('error1');
            return false;
        }

        list($sourceImageWidth, $sourceImageHeight, $sourceImageType) = getimagesize($sourceImagePath);
        switch ($sourceImageType) {
            case IMAGETYPE_GIF:
                $sourceGdImage = imagecreatefromgif($sourceImagePath);
                break;
            case IMAGETYPE_JPEG:
                $sourceGdImage = imagecreatefromjpeg($sourceImagePath);
                break;
            case IMAGETYPE_PNG:
                $sourceGdImage = imagecreatefrompng($sourceImagePath);
                break;
        }

        if (!isset($sourceGdImage) || $sourceGdImage === false) {
            die('error2');
            return false;
        }

        if (!empty($maxHeight)) {
            // Code permettant de redimentionné l'image en forcant la hauteur
            if ($isCrop) {
                $sourceAspectRatio = '4.5';
            } else {
                $sourceAspectRatio = $sourceImageWidth / $sourceImageHeight;
            }
            $thumbnailAspectRatio = $maxWidth / $maxHeight;

            if ($sourceImageWidth == $maxWidth && $sourceImageHeight == $maxHeight) {
                $thumbnailImageWidth = $maxWidth;
                $thumbnailImageHeight = $maxHeight;
            } elseif ($sourceImageWidth <= $maxWidth && $sourceImageHeight <= $maxHeight) {
                $thumbnailImageWidth = $maxWidth;
                $thumbnailImageHeight = (int)($sourceImageHeight / $sourceAspectRatio);
            } elseif ($thumbnailAspectRatio > $sourceAspectRatio) {
                $thumbnailImageWidth = (int)($maxHeight * $sourceAspectRatio);
                $thumbnailImageHeight = $maxHeight;
            } else {
                $thumbnailImageWidth = $maxWidth;
                if ($isCrop) {
                    $thumbnailImageHeight = (int)($sourceImageHeight / $sourceAspectRatio);
                } else {
                    $thumbnailImageHeight = (int)(($sourceImageHeight / $sourceImageWidth) * $thumbnailImageWidth);
                }
            }
        } elseif (!empty($maxWidth)) {
            // Si une largeur est spécifiée: on garde le ratio
            $thumbnailImageWidth = $maxWidth;
            $thumbnailImageHeight = (int)($sourceImageHeight * $maxWidth / $sourceImageWidth);
        } else {
            // Sinon on garde les tailles d'origine
            $thumbnailImageWidth = $sourceImageWidth;
            $thumbnailImageHeight = $sourceImageHeight;
        }

        if ($isCrop) {
            $tmpImg = imagecreatetruecolor($thumbnailImageWidth, $thumbnailImageHeight);
            imagecopyresampled($tmpImg, $sourceGdImage, 0, 0, 170, 5, 185, $thumbnailImageHeight, $sourceImageWidth, $sourceImageHeight);

            $dest = imagecreatetruecolor($maxWidth, $maxHeight);
            imagecopy($dest, $tmpImg, 0, 0, 0, 0, $sourceImageWidth, $sourceImageHeight);
            $thumbnailGdImage = $dest;
        } else {
            $thumbnailGdImage = imagecreatetruecolor($thumbnailImageWidth, $thumbnailImageHeight);
        }

        imagealphablending($thumbnailGdImage, false);
        imagesavealpha($thumbnailGdImage, true);

        if (!$isCrop) {
            imagecopyresampled($thumbnailGdImage, $sourceGdImage, 0, 0, 0, 0, $thumbnailImageWidth, $thumbnailImageHeight, $sourceImageWidth, $sourceImageHeight);
        }

        if ($isWatermarked) {
            $fileWatermark = '/var/www/lcdp/danse/src/Lcdp/CommonBundle/Resources/public/images/logo/LCDP_DANSE_BLANC_xs.png';
            // Charge le cachet et la photo afin d'y appliquer le tatouage numérique
            $stamp = imagecreatefrompng($fileWatermark);
            $im = $thumbnailGdImage;
            imagealphablending($im, true);

            // Définit les marges pour le cachet et récupère la hauteur et la largeur de celui-ci
            $margeRight = 10;
            $margeBottom = 10;
            $sx = imagesx($stamp);
            $sy = imagesy($stamp);
        }

        switch ($sourceImageType) {
            case IMAGETYPE_GIF:
                if ($isWatermarked) {
                    // Copie le cachet sur la photo en utilisant les marges et la largeur de la photo originale  afin de calculer la position du cachet
                    imagecopy($im, $stamp, imagesx($im) - $sx - $margeRight, imagesy($im) - $sy - $margeBottom, 0, 0, imagesx($stamp), imagesy($stamp));
                    imagegif($im, $destinationImagePath);
                } else {
                    imagegif($thumbnailGdImage, $destinationImagePath);
                }
                break;
            case IMAGETYPE_JPEG:
                if ($isWatermarked) {
                    // Copie le cachet sur la photo en utilisant les marges et la largeur de la photo originale  afin de calculer la position du cachet
                    imagecopy($im, $stamp, imagesx($im) - $sx - $margeRight, imagesy($im) - $sy - $margeBottom, 0, 0, imagesx($stamp), imagesy($stamp));
                    imagejpeg($im, $destinationImagePath, 90);
                } else {
                    imagejpeg($thumbnailGdImage, $destinationImagePath, 90);
                }
                break;
            case IMAGETYPE_PNG:
                if ($isWatermarked) {
                    // Copie le cachet sur la photo en utilisant les marges et la largeur de la photo originale  afin de calculer la position du cachet
                    imagecopy($im, $stamp, imagesx($im) - $sx - $margeRight, imagesy($im) - $sy - $margeBottom, 0, 0, imagesx($stamp), imagesy($stamp));
                    imagepng($im, $destinationImagePath, 0);
                } else {
                    imagepng($thumbnailGdImage, $destinationImagePath, 0);
                }
                break;
        }

        imagedestroy($sourceGdImage);
        imagedestroy($thumbnailGdImage);

        return true;
    }
}
