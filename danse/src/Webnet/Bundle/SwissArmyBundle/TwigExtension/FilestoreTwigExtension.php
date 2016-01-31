<?php

namespace Webnet\Bundle\SwissArmyBundle\TwigExtension;

class FilestoreTwigExtension extends \Twig_Extension
{
    /**
     * Service de filestore
     * @var \Webnet\Bundle\SwissArmyBundle\Service\FilestoreService
     */
    private $filestore;

    /**
     * Constructeur de l'extension TWIG
     *
     * @param mixed $filestore Service de filestore
     */
    public function __construct($filestore)
    {
        $this->filestore = $filestore;
    }

    /**
     * Fonction listant les fonctions disponibles
     *
     * @return array
     */
    public function getFunctions()
    {
        return array(
            'filePath' => new \Twig_Function_Method($this, 'getFilePath'),
            'fileUrl' => new \Twig_Function_Method($this, 'getFileUrl')
        );
    }

    /**
     * Retourne l'url correspondant à un UID et un type de document
     *
     * @param  string $uid             UID du document
     * @param  string $fileType        Type du document
     * @return string Url du fichier
     */
    public function getFileUrl($uid, $fileType)
    {
        return $this->filestore->getUrl($uid, $fileType);
    }

    /**
     * Retourne le chemin correspondant à un UID et un type de document
     *
     * @param  string $uid             UID du document
     * @param  string $fileType        Type du document
     * @return string Chemin du fichier
     */
    public function getFilePath($uid, $fileType)
    {
        return $this->filestore->getPath($uid, $fileType, true);
    }

    /**
     * Retourne le nom de l'extension
     *
     * @return string Nom de l'extension
     */
    public function getName()
    {
        return 'webnet_swissarmy_filestore_twig_extension';
    }
}
