<?php

namespace Webnet\Bundle\SwissArmyBundle\Service;

use Webnet\Bundle\SwissArmyBundle\Service\Interfaces\FileEncryptorInterface;

/**
 * Service permettant l'encodage de fichiers en utilisant le cypher TripleDES
 *
 * @author Antoine Pacaud <apacaud@webnet.fr>
 */
class TripleDesFileEncryptorService implements FileEncryptorInterface
{
    /**
     * Paramètres du service
     * @var array
     */
    protected $parameters;

    /**
     * Constructeur du service
     *
     * @param array $parameters Paramètres du service
     */
    public function __construct(array $parameters)
    {
        $this->parameters = $parameters;
    }

    /**
     * Encrypte un fichier dont le chemin est passé en paramètres
     *
     * @param string $filePath   Chemin du fichier à crypter
     * @param string $outputMode Mode de sortie attendu
     * @param string $outputPath [Optionnel] Chemin de sortie dans le cas d'un mode FILE
     * @return mixed
     */
    public function encryptFile($filePath, $outputMode, $ouputPath = null)
    {
        return $this->transformFile('mcrypt.tripledes', $filePath, $outputMode, $ouputPath);
    }

    /**
     * Décrypte un fichier dont le chemin est passé en paramètres
     *
     * @param string $filePath Chemin du fichier à décrypter
     * @param string $outputMode Mode de sortie attendu
     * @param string $outputPath [Optionnel] Chemin de sortie dans le cas d'un mode FILE
     * @return mixed
     */
    public function decryptFile($filePath, $outputMode, $ouputPath = null)
    {
        return $this->transformFile('mdecrypt.tripledes', $filePath, $outputMode, $ouputPath);
    }

    /**
     * (Dé)crypte un fichier dont le chemin est passé en paramètres
     *
     * @param string $cypher     Filtre d'encryptage/décryptage à utiliser
     * @param string $filePath   Chemin du fichier à (dé)crypter
     * @param string $outputMode Mode de sortie attendu
     * @param string $outputPath [Optionnel] Chemin de sortie dans le cas d'un mode FILE
     * @return mixed
     */
    protected function transformFile($cypher, $filePath, $outputMode, $ouputPath = null)
    {
        // Flux de travail
        $tempFile = $this->generateTemporaryFilePath();
        $fpTmp = fopen($tempFile, 'wb');
        if (empty($fpTmp)) {
            throw new \InvalidArgumentException("The decryptor can't write temporary files.");
        }

        // Flux de lecture
        $fpRead = fopen($filePath, 'r');
        if (empty($fpTmp)) {
            throw new \InvalidArgumentException("The cypher can't read the source file.");
        }

        // On applique le filtre d'encryptage au flux de travail
        stream_filter_append($fpTmp, $cypher, STREAM_FILTER_WRITE, $this->getEncryptionOptions());

        // On (de)crypte le fichier source en le dupliquant dans le flux de travail
        while (($buffer = fgets($fpRead, 4096)) !== false) {
            fwrite($fpTmp, $buffer);
        }

        // On ferme les flux
        fclose($fpRead);
        fclose($fpTmp);

        return $this->handleOutput($tempFile, $filePath, $outputMode, $ouputPath);
    }

    /**
     * Retourne les options d'encryption du service
     *
     * @return array
     */
    protected function getEncryptionOptions()
    {
        return array(
            'iv' => substr(md5('iv'. $this->parameters['key'], true), 0, 8),
            'key' => substr(md5('pass1'. $this->parameters['key'], true) . md5('pass2'. $this->parameters['key'], true), 0, 24)
        );
    }

    /**
     * Retourne un chemin valide pour un fichier de travail temporaire
     *
     * @return string Chemin d'un fichier
     */
    protected function generateTemporaryFilePath()
    {
        return $this->parameters['tmp_dir'] . DIRECTORY_SEPARATOR . substr(sha1(uniqid('', true)), 0, 32) . '.tmp';
    }

    /**
     * Gère le format de sortie demandé
     *
     * @param string $tempFile   Chemin du fichier de travail
     * @param string $filePath   Chemin du fichier à (dé)crypter
     * @param string $outputMode Mode de sortie attendu
     * @param string $outputPath [Optionnel] Chemin de sortie dans le cas d'un mode FILE
     * @return mixed
     * @throws \Exception
     */
    protected function handleOutput($tempFile, $filePath, $outputMode, $outputPath)
    {
        switch ($outputMode) {
            case self::OUTPUT_MODE_BUFFER:
                $output = file_get_contents($tempFile);
                break;

            case self::OUTPUT_MODE_FILE:
                $output = copy($tempFile, $outputPath);
                break;

            case self::OUTPUT_MODE_OVERRIDE:
                unlink($filePath);
                $output = copy($tempFile, $filePath);
                break;

            default:
                throw new \Exception('Unmanaged output mode');
                break;
        }

        // Suppression du fichier de travail
        unlink($tempFile);

        // Retour
        return $output;
    }
}
