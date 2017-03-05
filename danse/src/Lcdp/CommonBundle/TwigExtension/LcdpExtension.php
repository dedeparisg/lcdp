<?php

namespace Lcdp\CommonBundle\TwigExtension;

use Lcdp\CommonBundle\Entity\Album;

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
            'formatLcdpDate' => new \Twig_SimpleFilter('formatLcdpDate', array($this, 'formatLcdpDate')),
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
            'formatLcdpDateFromTo' => new \Twig_SimpleFunction('formatLcdpDateFromTo', array($this, 'formatLcdpDateFromTo', array('is_safe' => array('html')))),
            'formatLcdpAlbumDate' => new \Twig_SimpleFunction('formatLcdpAlbumDate', array($this, 'formatLcdpAlbumDate', array('is_safe' => array('html'))))
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
     * Formatte correctement une période
     * Affichera par exemple : "Du samedi 24 juin au dimanche 25 juin 2016"
     *
     * @param array $entity
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public static function formatLcdpAlbumDate(array $entity)
    {
        $from = null;
        $startDateYear = $entity['startDateYear'];
        $startDateMonth = $entity['startDateMonth'];
        $startDateDay = $entity['startDateDay'];

        if (!empty($startDateYear) && !empty($startDateMonth) && !empty($startDateDay)) {
            $from = new \DateTime($startDateDay . '-' . $startDateMonth . '-' . $startDateYear);
        }

        $endDateYear = $entity['endDateYear'];
        $endDateMonth = $entity['endDateMonth'];
        $endDateDay = $entity['endDateDay'];

        if (!empty($endDateYear) && !empty($endDateMonth) && !empty($endDateDay)) {
            $to = new \DateTime($endDateDay . '-' . $endDateMonth . '-' . $endDateYear);
        }

        // Si seulement l'année de début est spécifiée
        if (!empty($startDateYear) && empty($startDateMonth) && empty($startDateDay) && empty($endDateYear) && empty($endDateMonth) && empty($endDateDay)) {
            return "En " . $startDateYear;
        }

        // Si seulement les années de début et de fin sont spécifiée
        if (!empty($startDateYear) && empty($startDateMonth) && empty($startDateDay) && !empty($endDateYear) && empty($endDateMonth) && empty($endDateDay)) {
            if ($startDateYear == $endDateYear) {
                return "En " . $startDateYear;
            } else {
                return "De " . $startDateYear . ' à ' . $endDateYear;
            }
        }

        $months = LcdpExtension::getMonths();

        // Si seulement l'année et le mois de début sont spécifiés
        if (!empty($startDateYear) && !empty($startDateMonth) && empty($startDateDay) && empty($endDateYear) && empty($endDateMonth) && empty($endDateDay)) {
            return "En " . $months[$startDateMonth] . ' ' . $startDateYear;
        }

        // Si seulement l'année et le mois de début et de fin sont spécifiés
        if (!empty($startDateYear) && !empty($startDateMonth) && empty($startDateDay) && !empty($endDateYear) && !empty($endDateMonth) && empty($endDateDay)) {
            if ($startDateYear == $endDateYear) {
                if ($startDateMonth == $endDateMonth) {
                    return "En " . $months[$startDateMonth] . ' ' . $startDateYear;
                } else {
                    return "De " . $months[$startDateMonth] . ' à ' . $months[$endDateMonth] . ' ' . $startDateYear;
                }
            } else {
                return "De " . $months[$startDateMonth] . ' ' . $startDateYear . ' à ' . $months[$endDateMonth] . ' ' . $endDateYear;
            }
        }

        $days = LcdpExtension::getDays();

        // Si seulement l'année, le mois et le jour de début sont spécifiés
        if (!empty($startDateYear) && !empty($startDateMonth) && !empty($startDateDay) && empty($endDateYear) && empty($endDateMonth) && empty($endDateDay)) {
            $nom_jour = $from->format("w");

            return 'Le ' . strtolower($days[$nom_jour]) . ' ' . $startDateDay . ' ' . $months[$startDateMonth] . ' ' . $startDateYear;
        }

        // Si toutes les valeurs sont renseignées
        if (!empty($startDateYear) && !empty($startDateMonth) && !empty($startDateDay) && !empty($endDateYear) && !empty($endDateMonth) && !empty($endDateDay)) {

            $nom_jour_start = $from->format("w");
            $nom_jour_end = $to->format("w");

            if ($startDateYear == $endDateYear) {
                if ($startDateMonth == $endDateMonth) {
                    if ($startDateDay == $endDateDay) {
                        return 'Le ' . strtolower($days[$nom_jour_start]) . ' ' . $startDateDay . ' ' . $months[$startDateMonth] . ' ' . $startDateYear;
                    } else {

                        return 'Du ' . strtolower($days[$nom_jour_start]) . ' ' . $startDateDay . ' au ' . strtolower($days[$nom_jour_end]) . ' ' . $endDateDay . ' ' . $months[$startDateMonth] . ' ' . $startDateYear;
                    }
                } else {
                    return 'Du ' . strtolower($days[$nom_jour_start]) . ' ' . $startDateDay . ' ' . $months[$startDateMonth] . ' au ' . strtolower($days[$nom_jour_end]) . ' ' . $endDateDay . ' ' . $months[$endDateMonth] . ' ' . $startDateYear;
                }
            } else {
                return 'Du ' . strtolower($days[$nom_jour_start]) . ' ' . $startDateDay . ' ' . $months[$startDateMonth] . ' ' . $startDateYear . ' au ' . strtolower($days[$nom_jour_end]) . ' ' . $endDateDay . ' ' . $months[$endDateMonth] . ' ' . $endDateYear;
            }
        }
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
