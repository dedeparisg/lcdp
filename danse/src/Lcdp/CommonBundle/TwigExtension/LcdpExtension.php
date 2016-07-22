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
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getFilters()
    {
        return array(
            'formatLcdpDate' => new \Twig_Filter_Method($this, 'formatLcdpDate')
        );
    }

    /**
     * Retourne les fonctions twig du projet
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getFunctions()
    {
        return array(
            'formatLcdpDateFromTo' => new \Twig_Function_Method($this, 'formatLcdpDateFromTo', array('is_safe' => array('html')))
        );
    }

    /**
     * Formatte correctement une date
     * Affichera par exemple : "samedi 24 juin 2016"
     *
     * @param \DateTime $date La date à formater
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function formatLcdpDate(\DateTime $date)
    {
        $days = LcdpExtension::getDays();
        $months = LcdpExtension::getMonths();

        // on extrait la date du jour
        list($nom_jour, $jour, $mois, $annee) = explode('/', $date->format("w/d/n/Y"));

        $return =  $days[$nom_jour] . ' ' . $jour . ' ' . $months[$mois] . ' ' . $annee;

        return $return;
    }

    /**
     * Formatte correctement une période
     * Affichera par exemple : "Du samedi 24 juin au dimanche 25 juin 2016"
     *
     * @param \DateTime      from La date de début à formater
     * @param \DateTime|null $to  La date de fin à formater
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function formatLcdpDateFromTo(\DateTime $from, \DateTime $to = null)
    {
        $return = '';
        $days = LcdpExtension::getDays();
        $months = LcdpExtension::getMonths();

        if (!is_null($to) && $from->format('Ymd') !== $to->format('Ymd')) {
            $isSameYear = $from->format('Y') === $to->format('Y');

            // on extrait la date du jour
            if ($isSameYear) {
                list($nom_jour, $jour, $mois) = explode('/', $from->format("w/d/n"));
                $return .= 'Du ' . strtolower($days[$nom_jour]) . ' ' . $jour . ' ' . $months[$mois] . ' au ';
            } else {
                list($nom_jour, $jour, $mois, $annee) = explode('/', $from->format("w/d/n/Y"));
                $return .= 'Du ' . strtolower($days[$nom_jour]) . ' ' . $jour . ' ' . $months[$mois] . ' ' . $annee . ' au ';
            }

            list($nom_jour, $jour, $mois, $annee) = explode('/', $to->format("w/d/n/Y"));
            $return .= strtolower($days[$nom_jour]) . ' ' . $jour . ' ' . $months[$mois] . ' ' . $annee;
        } else {
            list($nom_jour, $jour, $mois, $annee) = explode('/', $from->format("w/d/n/Y"));
            $return .= 'Le ' . strtolower($days[$nom_jour]) . ' ' . $jour . ' ' . $months[$mois] . ' ' . $annee;
        }


        return $return;
    }

    /**
     * Retourne les jours de la semaine en français
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function getDays()
    {
        return array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    }

    /**
     * Retourne les mois de l'année en français
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function getMonths()
    {
        return array(
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
