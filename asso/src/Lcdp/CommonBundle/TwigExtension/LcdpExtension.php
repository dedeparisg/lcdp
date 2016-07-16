<?php

namespace Lcdp\CommonBundle\TwigExtension;

/**
 * Extension twig
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class LcdpExtension extends \Twig_Extension
{
    /**
     * Retourne les filtres twig du projet
     *
     * @return array
     *
     * @author Benjamin Levoir <blevoir@webnet.fr>
     */
    public function getFilters()
    {
        return array(
            'formatLcdpDate' => new \Twig_Filter_Method($this, 'formatLcdpDate')
        );
    }

    /**
     * Formatte correctement une date
     * Affichera par exemple : "samedi 24 juin 2016"
     *
     * @param string $date La date à formater
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function formatLcdpDate($date)
    {
        // Voici les deux tableaux des jours et des mois traduits en français
        $nom_jour_fr = array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
        $mois_fr = Array(
            "",
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre"
        );
        // on extrait la date du jour
        list($nom_jour, $jour, $mois, $annee) = explode('/', $date->format("w/d/n/Y"));

        $return =  $nom_jour_fr[$nom_jour] . ' ' . $jour . ' ' . $mois_fr[$mois] . ' ' . $annee;

        return $return;
    }

    /**
     * Retourne le nom de l'extension
     *
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getName()
    {
        return 'lcdp_twig_extension';
    }
}
