<?php

namespace Webnet\Bundle\SwissArmyBundle\Service\Interfaces;

/**
 * Interface des services permettant l'encryptage/décryptage de fichiers
 *
 * @author Antoine Pacaud <apacaud@webnet.fr>
 */
interface FileEncryptorInterface
{
    const OUTPUT_MODE_BUFFER = 'BUFFER';
    const OUTPUT_MODE_FILE = 'FILE';
    const OUTPUT_MODE_OVERRIDE = 'OVERRIDE';

    /**
     * Encrypte un fichier dont le chemin est passé en paramètres
     *
     * @param string $filePath   Chemin du fichier à crypter
     * @param string $outputMode Mode de sortie attendu
     * @param string $outputPath [Optionnel] Chemin de sortie dans le cas d'un mode FILE
     * @return mixed
     */
    public function encryptFile($filePath, $outputMode, $ouputPath = null);

    /**
     * Décrypte un fichier dont le chemin est passé en paramètres
     *
     * @param string $filePath Chemin du fichier à décrypter
     * @param string $outputMode Mode de sortie attendu
     * @param string $outputPath [Optionnel] Chemin de sortie dans le cas d'un mode FILE
     * @return mixed
     */
    public function decryptFile($filePath, $outputMode, $ouputPath = null);
}
