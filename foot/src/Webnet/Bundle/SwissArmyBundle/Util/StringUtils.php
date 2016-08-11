<?php

namespace Webnet\Bundle\SwissArmyBundle\Util;

/**
 * String utility functions.
 */
class StringUtils
{
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

    /**
     * Permet de lister les années d'aujourd'hui depuis la création du club
     *
     * @param integer $start Année de début
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function getYearsFrom($start = 2006)
    {
        $years = array();
        $now = new \DateTime();

        for ($min = $start, $max = $now->format('Y'); $max >= $min; $max--) {
            $years[$max] = $max;
        }

        return $years;
    }

    /**
     * Permet de lister les mois en Français
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function getMonths()
    {
        $months = array(
            1 => "Janvier",
            2 => "Février",
            3 => "Mars",
            4 => "Avril",
            5 => "Mai",
            6 => "Juin",
            7 => "Juillet",
            8 => "Août",
            9 => "Septembre",
            10 => "Octobre",
            11 => "Novembre",
            12 => "Décembre"
        );

        return $months;
    }

    /**
     * Permet de lister les jours possible d'un mois
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function getDays()
    {
        $days = array();

        for ($min = 1, $max = 31; $min <= $max; $min++) {
            $days[$min] = $min;
        }

        return $days;
    }
}
