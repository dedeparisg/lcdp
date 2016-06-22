<?php

namespace Webnet\Bundle\SwissArmyBundle\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Webnet\Bundle\SwissArmyBundle\Service\Interfaces\AntivirusInterface;
use Webnet\Bundle\SwissArmyBundle\Service\Interfaces\FileEncryptorInterface;
use Webnet\Bundle\SwissArmyBundle\Exception\FilestoreException;
use Webnet\Bundle\SwissArmyBundle\Util\StringUtils;

/**
 * Service de gestion du filestore
 *
 * @author Antoine Pacaud <apacaud@webnet.fr>
 */
class FilestoreService
{
    const MAIN_FOLDER = 'files';

    /**
     * Paramètres du service
     *
     * @var array
     */
    private $parameters;

    /**
     * Antivirus (facultatif)
     *
     * @var \Webnet\Bundle\SwissArmyBundle\Service\Interfaces\AntivirusInterface
     */
    private $antivirus;

    /**
     * Encrypteur de fichiers (facultatif)
     *
     * @var \Webnet\Bundle\SwissArmyBundle\Service\Interfaces\FileEncryptorInterface
     */
    private $fileEncryptor;

    /**
     * Constructeur du service
     *
     * @param array $parameters Paramètres du service
     */
    public function __construct($parameters)
    {
        $this->parameters = $parameters;
    }

    /**
     * Permet d'injecter un antivirus si disponible
     *
     * @param \Webnet\Bundle\SwissArmyBundle\Service\Interfaces\AntivirusInterface $antivirus
     */
    public function setAntivirus(AntivirusInterface $antivirus)
    {
        $this->antivirus = $antivirus;
    }

    /**
     * Permet d'injecter un encrypteur de fichiers
     *
     * @param \Webnet\Bundle\SwissArmyBundle\Service\Interfaces\FileEncryptorInterface $fileEncryptor
     */
    public function setFileEncryptor(FileEncryptorInterface $fileEncryptor)
    {
        $this->fileEncryptor = $fileEncryptor;
    }

    /**
     * Renvoie le chemin d'accès aux fichiers pour un système donné
     *
     * @return string
     */
    public function getSystemPath()
    {
        return $this->parameters['paths']['store'];
    }

    /**
     * Renvoie le chemin d'accès aux fichiers pour un système donné
     *
     * @return string
     */
    public function getSystemUrl()
    {
        return $this->parameters['urls']['store'];
    }

    /**
     * Génére un UID
     *
     * @param string $extension [Optionnel] Extension suffixée à l'UID
     * @return string(36) Chaine unique
     */
    public function generateUniqueId($extension = null)
    {
        $uid = StringUtils::generateUid();

        // Si une extension est spécifiée, on l'ajoute
        if ($extension) {
            $uid .= '.' . $extension;
        }

        return $uid;
    }

    /**
     * Retourne le chemin correspondant à un UID et un type de document
     *
     * @param  string  $uid          UID du document
     * @param  string  $fileType     Type du document
     * @param  boolean $withFilename [Optionnel] Inclure le nom du fichier (défaut: oui)
     * @param  string  $rootPath     [Optionnel] Chemin d'accès au filestore (par défaut, celui configuré par défaut est utilisé)
     * @return string  Chemin du fichier
     */
    public function getPath($uid, $fileType, $withFilename = true, $rootPath = null)
    {
        return 'rr';
        // Chemin de base du filestore
        $rootPath = ($rootPath) ? $rootPath : $this->getSystemPath();

        // Sélection du dépot adapté
        if (!empty($this->parameters['file_types'][$fileType]['folder'])) {
            $storePrefix = $rootPath . DIRECTORY_SEPARATOR . $this->parameters['file_types'][$fileType]['folder'];
        } else {
            $storePrefix = $rootPath . DIRECTORY_SEPARATOR . self::MAIN_FOLDER;
        }

        // Construction et renvoi du chemin
        $path = $storePrefix . DIRECTORY_SEPARATOR .
            substr($uid, 0, 1) . DIRECTORY_SEPARATOR .
            substr($uid, 1, 1) . DIRECTORY_SEPARATOR .
            substr($uid, 2, 1);

        return ($withFilename) ? $path . DIRECTORY_SEPARATOR . $this->getFilename($uid, $fileType) : $path;
    }

    /**
     * Retourne le nom du fichier correspondant à un UID et un type de document
     *
     * @param string $uid      UID du document
     * @param string $fileType Type du document
     */
    public function getFilename($uid, $fileType)
    {
        if ($this->parameters['fix_extensions'] == true) {
            if (!empty($this->parameters['file_types'][$fileType]['extension'])) {
                throw new \InvalidArgumentException('lg.filestore.exceptions.unknown.filetype');
            }

            $uid .= '.' . $this->parameters['file_types'][$fileType]['extension'];
        }

        // Construction et renvoi du chemin
        return $uid;
    }

    /**
     * Retourne l'url correspondant à un UID et un type de document
     *
     * @param  string $uid      UID du document
     * @param  string $fileType Type du document
     * @return string Url du fichier
     */
    public function getUrl($uid, $fileType)
    {
        $return = '';

        if (!empty($uid) && !empty($fileType)) {
            $return = $this->getPath($uid, $fileType, true, $this->getSystemUrl());
        }

        return $return;
    }

    /**
     * Retourne le chemin correspondant à un UID et un type de document
     *
     * @param  UploadedFile $file     Média a enregistrer
     * @param  string       $uid      UID du document
     * @param  string       $ext      Extension du document
     * @param  string       $rootPath [Optionnel] Chemin d'accès au filestore (par défaut, celui configuré par défaut est utilisé)
     * @return string  Chemin du fichier
     */
    public function addMedia(UploadedFile $file, $uid, $ext, $rootPath = null)
    {
        $fileType = $this->mimeContentType($uid, $ext);

        // On vérifie le fichier avant de l'ajouter sur le filestore
        $this->ensureMediaSafetyBeforeUpload($file, $fileType);

        // On récupère le chemin du fichier
        $mediaPath = $this->getPath($uid, $fileType, false, $rootPath);
        $mediaName = $this->getFilename($uid, $fileType);

        // On vérifie que le chemin existe sinon on le cree
        if (!is_dir($mediaPath)) {
            mkdir($mediaPath, 0777, true);
        }

        // On écrit le fichier
        $file->move($mediaPath, $mediaName);

        // On effectue les derniers contrôles sur le fichier
        $this->ensureMediaSafetyAfterUpload($mediaPath . DIRECTORY_SEPARATOR . $mediaName, $fileType);

        return true;
    }

    /**
     * Supprime un média présent dans le filestore
     *
     * @param  string $uid      UID du document
     * @param  string $fileType Type du document
     * @param  string $rootPath [Optionnel] Chemin d'accès au filestore (par défaut, celui configuré par défaut est utilisé)
     * @return boolean
     */
    public function removeMedia($uid, $fileType, $rootPath = null)
    {
        // On récupère le chemin du fichier
        $mediaPath = $this->getPath($uid, $fileType, true, $rootPath);

        // On supprime le média
        unlink($mediaPath);

        return true;
    }

    /**
     * Retourne le contenu brut d'un média
     *
     * @param  string $uid      UID du document
     * @param  string $fileType Type du document
     * @param  string $rootPath [Optionnel] Chemin d'accès au filestore (par défaut, celui configuré par défaut est utilisé)
     * @return string
     */
    public function getMediaContent($uid, $fileType, $rootPath = null)
    {
        // On récupère le chemin du fichier
        $mediaPath = $this->getPath($uid, $fileType, true, $rootPath);

        // Le fichier est-il encodé ?
        if ($this->isEncoded($fileType)) {
            return $this->fileEncryptor->decryptFile($mediaPath, FileEncryptorInterface::OUTPUT_MODE_BUFFER);
        }

        // Si le fichier n'est pas encodé
        return file_get_contents($mediaPath);
    }

    /**
     * Conrôle le fichier avant de l'autoriser à être stocké sur le filestore
     *
     * @param \Symfony\Component\HttpFoundation\File\UploadedFile $file     Média à contrôler
     * @param string                                              $fileType Type du document
     * @throws FilestoreException
     */
    protected function ensureMediaSafetyBeforeUpload(UploadedFile $file, $fileType)
    {
        // Contrôle des extensions
        if ($this->parameters['active_extensions_control'] == true) {
            // Si des extensions spécifiques ont été spécifiées pour ce type de fichier
            if (!empty($this->parameters['file_types'][$fileType]['allowed_extensions'])) {
                $allowedExtensions = $this->parameters['file_types'][$fileType]['allowed_extensions'];
            } else {
                $allowedExtensions = $this->parameters['allowed_extensions'];
            }

            // On contrôle l'extension du fichier
            if (!in_array($file->getClientOriginalExtension(), $allowedExtensions)) {
                throw new FilestoreException('Extension du fichier non autorisée');
            }

            // Si Symfony réussit à deviner la véritable extension du fichier, celle-ci est également contrôlée
            $guessedExtension = $file->guessClientExtension();

            if ($guessedExtension && !in_array($guessedExtension, $allowedExtensions)) {
                throw new FilestoreException('Extension du fichier non autorisée');
            }
        }
    }

    /**
     * Détermine si un type de fichier doit être encodé
     *
     * @param string $fileType Type de fichiers
     * @return boolean
     */
    public function isEncoded($fileType)
    {
        return (isset($this->parameters['file_types'][$fileType]['encrypt'])
            && $this->parameters['file_types'][$fileType]['encrypt'] == true);
    }

    /**
     * Conrôle le fichier après son stockage sur le filestore
     *
     * @param string $filePath Chemin du document
     * @param string $fileType Type du document
     * @throws FilestoreException
     */
    protected function ensureMediaSafetyAfterUpload($filePath, $fileType)
    {
        // Antivirus (si configuré)
        if (!empty($this->antivirus)) {
            if (!$this->antivirus->isFileSafe($filePath, true)) {
                throw new FilestoreException('lg.filestore.exceptions.unsafe.file');
            }
        }

        // Encryptage (si configuré)
        if ($this->isEncoded($fileType)) {
            $this->fileEncryptor->encryptFile($filePath, FileEncryptorInterface::OUTPUT_MODE_OVERRIDE);
        }
    }

    protected function mimeContentType($filename, $ext)
    {
        $mime_types = array(
            'txt' => 'text/plain',
            'htm' => 'text/html',
            'html' => 'text/html',
            'php' => 'text/html',
            'css' => 'text/css',
            'js' => 'application/javascript',
            'json' => 'application/json',
            'xml' => 'application/xml',
            'swf' => 'application/x-shockwave-flash',
            'flv' => 'video/x-flv',
            // images
            'png' => 'image/png',
            'jpe' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'jpg' => 'image/jpeg',
            'gif' => 'image/gif',
            'bmp' => 'image/bmp',
            'ico' => 'image/vnd.microsoft.icon',
            'tiff' => 'image/tiff',
            'tif' => 'image/tiff',
            'svg' => 'image/svg+xml',
            'svgz' => 'image/svg+xml',
            // archives
            'zip' => 'application/zip',
            'rar' => 'application/x-rar-compressed',
            'exe' => 'application/x-msdownload',
            'msi' => 'application/x-msdownload',
            'cab' => 'application/vnd.ms-cab-compressed',
            // audio/video
            'mp3' => 'audio/mpeg',
            'qt' => 'video/quicktime',
            'mov' => 'video/quicktime',
            // adobe
            'pdf' => 'application/pdf',
            'psd' => 'image/vnd.adobe.photoshop',
            'ai' => 'application/postscript',
            'eps' => 'application/postscript',
            'ps' => 'application/postscript',
            // ms office
            'doc' => 'application/msword',
            'rtf' => 'application/rtf',
            'xls' => 'application/vnd.ms-excel',
            'ppt' => 'application/vnd.ms-powerpoint',
            // open office
            'odt' => 'application/vnd.oasis.opendocument.text',
            'ods' => 'application/vnd.oasis.opendocument.spreadsheet',
        );

        if (array_key_exists($ext, $mime_types)) {
            return $mime_types[$ext];
        } elseif (function_exists('finfo_open')) {
            $finfo = finfo_open(FILEINFO_MIME);
            $mimetype = finfo_file($finfo, $filename);
            finfo_close($finfo);
            return $mimetype;
        } else {
            return 'application/octet-stream';
        }
    }
}
