<?php

namespace Webnet\Bundle\SwissArmyBundle\Service;

use Webnet\Bundle\SwissArmyBundle\Service\Interfaces\AntivirusInterface;
use Symfony\Component\Process\Process;

/**
 * Service de gestion du filestore
 *
 * @author Antoine Pacaud <apacaud@webnet.fr>
 */
class ClamAvService implements AntivirusInterface
{
    /**
     * Vérifie qu'un fichier est sain en fournissant son chemin d'accès
     *
     * @param string  $filePath     Chemin du fichier à contrôler
     * @param boolean $removeUnsafe Supprimer automatiquement le fichier si celui-ci n'est pas sûr
     * @return boolean
     *
     * @author Antoine Pacaud <apacaud@webnet.fr>
     */
    public function isFileSafe($filePath, $removeUnsafe = false)
    {
        $process = new Process('clamdscan ' . $filePath);
        $process->setTimeout(10);
        $process->run();

        if ($removeUnsafe && !$process->isSuccessful()) {
            unlink($filePath);
        }

        return $process->isSuccessful();
    }
}
