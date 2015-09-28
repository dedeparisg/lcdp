<?php

namespace Webnet\Bundle\SwissArmyBundle\Service\Interfaces;

/**
 * Interface des services permettant l'analyse antivirus de fichiers
 *
 * @author Antoine Pacaud <apacaud@webnet.fr>
 */
interface AntivirusInterface
{
    /**
     * Vérifie qu'un fichier est sain en fournissant son chemin d'accès
     *
     * @param string  $filePath     Chemin du fichier à contrôler
     * @param boolean $removeUnsafe Supprimer automatiquement le fichier si celui-ci n'est pas sûr
     * @return boolean
     */
    public function isFileSafe($filePath, $removeUnsafe = false);
}
