<?php

namespace Webnet\Bundle\SwissArmyBundle\Service;

use Lcdp\FrontBundle\Service\UtilsService;
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
     * @var array
     */
    private $parameters;

    /**
     * Service Utils
     * @var UtilsService $utilsService
     */
    private $utilsService;

    /**
     * Antivirus (facultatif)
     * @var \Webnet\Bundle\SwissArmyBundle\Service\Interfaces\AntivirusInterface
     */
    private $antivirus;

    /**
     * Encrypteur de fichiers (facultatif)
     * @var \Webnet\Bundle\SwissArmyBundle\Service\Interfaces\FileEncryptorInterface
     */
    private $fileEncryptor;

    /**
     * Constructeur du service
     *
     * @param array        $parameters   Paramètres du service
     * @param UtilsService $utilsService Service utilisataire
     */
    public function __construct($parameters, UtilsService $utilsService)
    {
        $this->parameters = $parameters;
        $this->utilsService = $utilsService;
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
            $uid .= '.' . strtolower($extension);
        }

        return $uid;
    }

    /**
     * Retourne le chemin correspondant à un UID et un type de document
     *
     * @param  string  $uid             UID du document
     * @param  string  $fileType        Type du document
     * @param  boolean $withFilename    [Optionnel] Inclure le nom du fichier (défaut: oui)
     * @param  string  $rootPath        [Optionnel] Chemin d'accès au filestore (par défaut, celui configuré par défaut est utilisé)
     * @return string  Chemin du fichier
     */
    public function getPath($uid, $fileType, $withFilename = true, $rootPath = null)
    {
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
     * @return string
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
     * @param  string $uid             UID du document
     * @param  string $fileType        Type du document
     * @return string Url du fichier
     */
    public function getUrl($uid, $fileType)
    {
        return $this->getPath($uid, $fileType, true, $this->getSystemUrl());
    }

    /**
     * Retourne le chemin correspondant à un UID et un type de document
     *
     * @param  UploadedFile   $file            Média a enregistrer
     * @param  string         $uid             UID du document
     * @param  string         $fileType        Type du document
     * @param  string         $rootPath        [Optionnel] Chemin d'accès au filestore (par défaut, celui configuré par défaut est utilisé)
     * @return string  Chemin du fichier
     */
    public function addMedia(UploadedFile $file, $uid, $fileType, $rootPath = null)
    {
        $uidExploded = explode('.', $uid);

        // On vérifie le fichier avant de l'ajouter sur le filestore
        $this->ensureMediaSafetyBeforeUpload($file, $fileType);

        // On récupère le chemin du fichier
        $mediaPath = $this->getPath($uid, $fileType, false, $rootPath);

        // Déclaration des différent nom de vignettes
        $mediaNameWatermark = $this->getFilename($uid, $fileType);
        $mediaNameClean = $this->getFilename($uidExploded[0] . '_clean.' . $uidExploded[1], $fileType);
        $mediaNameMedium = $this->getFilename($uidExploded[0] . '_med.' . $uidExploded[1], $fileType);
        $mediaNameBo = $this->getFilename($uidExploded[0] . '_bo.' . $uidExploded[1], $fileType);
        $mediaNameFo = $this->getFilename($uidExploded[0] . '_fo.' . $uidExploded[1], $fileType);

        // On vérifie que le chemin existe sinon on le créer
        if (!is_dir($mediaPath)) {
            mkdir($mediaPath, 0777, true);
        }

        // On écrit le fichier
        $file->move($mediaPath, $mediaNameClean);

        // Image "Originale" avec watermark
        $this->utilsService->resizeImage(
            $mediaPath . '/' . $mediaNameClean,
            $mediaPath . '/' . $mediaNameWatermark,
            null,
            null,
            true
        );

        // Image "Medium" (230px de large)
        $this->utilsService->resizeImage(
            $mediaPath . '/' . $mediaNameClean,
            $mediaPath . '/' . $mediaNameMedium,
            230
        );

        // Image "BO" (300px de large)
        $this->utilsService->resizeImage(
            $mediaPath . '/' . $mediaNameClean,
            $mediaPath . '/' . $mediaNameBo,
            300
        );

        // Image "FO" (140px de large)
        $this->utilsService->resizeImage(
            $mediaPath . '/' . $mediaNameClean,
            $mediaPath . '/' . $mediaNameFo,
            140
        );

        // On effectue les derniers contrôles sur le fichier
        $this->ensureMediaSafetyAfterUpload($mediaPath . DIRECTORY_SEPARATOR . $mediaNameClean, $fileType);

        return true;
    }

    /**
     * Retourne le chemin correspondant à un UID et un type de document
     *
     * @param  string $content  Source du média
     * @param  string $uid      UID du document
     * @param  string $fileType Type du document
     * @param  string $rootPath [Optionnel] Chemin d'accès au filestore (par défaut, celui configuré par défaut est utilisé)
     * @return string  Chemin du fichier
     */
    public function addContentAsMedia($content, $uid, $fileType, $rootPath = null)
    {
        // On récupère le chemin du fichier
        $mediaPath = $this->getPath($uid, $fileType, false, $rootPath);
        $mediaName = $this->getFilename($uid, $fileType);

        // On vérifie que le chemin existe sinon on le cree
        if (!is_dir($mediaPath)) {
            mkdir($mediaPath, 0777, true);
        }

        // On écrit le fichier
        if (file_put_contents($mediaPath . DIRECTORY_SEPARATOR . $mediaName, $content) === false) {
            return false;
        }

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
        $uidExploded = explode('.', $uid);

        // Récupération des différent nom de vignettes
        $mediaNameWatermark = $this->getPath($uid, $fileType, true, $rootPath);
        $mediaNameClean = $this->getPath($uidExploded[0] . '_clean.' . $uidExploded[1], $fileType, true, $rootPath);
        $mediaNameMedium = $this->getPath($uidExploded[0] . '_med.' . $uidExploded[1], $fileType, true, $rootPath);
        $mediaNameBo = $this->getPath($uidExploded[0] . '_bo.' . $uidExploded[1], $fileType, true, $rootPath);
        $mediaNameFo = $this->getPath($uidExploded[0] . '_fo.' . $uidExploded[1], $fileType, true, $rootPath);

        if (is_file($mediaNameWatermark)) {
            unlink($mediaNameWatermark);
        }

        if (is_file($mediaNameClean)) {
            unlink($mediaNameClean);
        }

        if (is_file($mediaNameMedium)) {
            unlink($mediaNameMedium);
        }

        if (is_file($mediaNameBo)) {
            unlink($mediaNameBo);
        }

        if (is_file($mediaNameFo)) {
            unlink($mediaNameFo);
        }

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
            if (!in_array(strtolower($file->getClientOriginalExtension()), $allowedExtensions)) {
                throw new FilestoreException('lg.filestore.exceptions.unallowed.extension');
            }

            // Si Symfony réussit à deviner la véritable extension du fichier, celle-ci est également contrôlée
            $guessedExtension = $file->guessClientExtension();
            if ($guessedExtension && !in_array(strtolower($guessedExtension), $allowedExtensions)) {
                throw new FilestoreException('lg.filestore.exceptions.unallowed.extension');
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
}
