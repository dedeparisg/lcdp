<?php

namespace Webnet\Bundle\SwissArmyBundle\Util;

/**
* String utility functions.
*/
class StringUtils
{
    /**
     * This class should not be instantiated
     */
    private function __construct()
    {

    }

    /**
     * Permet de retirer tous les caractères spéciaux d'une chaine
     *
     * @param  string $slug Chaine à traiter
     * @return string       Même chaine sans les caractères spéciaux
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function slugify($slug = null)
    {
        $output = '';

        if (!empty($slug)) {
            // Etape 1 - on remplace toutes les lettres
            $accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
            $ssaccents = "AAAAAAaaaaaaOOOOOOooooooEEEEeeeeCcIIIIiiiiUUUUuuuuyNn";
            $slug_1 = strtolower(strtr(utf8_decode(trim($slug)), utf8_decode($accents), $ssaccents));

            // Etape 2 - on remplace tous les charactères spéciaux
            $in = array(' ', '?', '!', '.', ',', ':', "'", '&', '(', ')', '[', ']');
            $out = array('-', '', '', '', '', '', '-', 'et', '', '', '', '');
            $slug_2 = str_replace($in, $out, $slug_1);

            // Etape 3 -
            $output = preg_replace('/([^.a-z0-9]+)/i', '-', $slug_2);

            // On supprime le dernier caractère si la chaine fini par '-'
            if (substr($output, -1) == '-') {
                $output = substr($output, 0, strlen($output) - 1);
            }
        }

        return $output;
    }

    /**
     * Permet d'obtenir un UID pour un nouveau fichier
     *
     * @return string UID généré (ex : 550e8400-e29b-41d4-a716-446655440000)
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function generateUid()
    {
        $chars = sha1(uniqid('', true));
        $uid = substr($chars, 0, 8) . '-';
        $uid .= substr($chars, 8, 4) . '-';
        $uid .= substr($chars, 12, 4) . '-';
        $uid .= substr($chars, 16, 4) . '-';
        $uid .= substr($chars, 20, 12);

        return $uid;
    }
}
