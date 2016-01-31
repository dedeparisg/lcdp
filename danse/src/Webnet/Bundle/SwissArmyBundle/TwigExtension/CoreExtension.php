<?php

namespace Webnet\Bundle\SwissArmyBundle\TwigExtension;

use \Twig_Extension;
use \Twig_SimpleFilter;

/**
 * Extension TWIG principale
 *
 * @author Amine Mokeddem <amokeddem@webnet.fr>
 * @author Antoine Pacaud <apacaud@webnet.fr>
 * @author André Tapia <atapia@webnet.fr>
 */
class CoreExtension extends Twig_Extension
{
    /**
     * Fonction listant les filtres disponibles
     *
     * @return array
     */
    public function getFilters()
    {
        return array(
            new Twig_SimpleFilter('number_humanize', array($this, 'humanizeNumber')),
            new Twig_SimpleFilter('text2link', array($this, 'text2link'), array("is_safe" => array("html"))),
            new Twig_SimpleFilter('utf8_encode', 'utf8_encode'),
        );
    }

    /**
     * Supprime les zeros inutiles d'un float
     *
     * @param  float|integer $number Valeur numérique
     * @return float|integer $number Valeur numérique au format "humain"
     */
    public function humanizeNumber($number, $separator = '.')
    {
        return rtrim(rtrim($number, 0), $separator);
    }

    /**
     * Fonction qui ajoute des liens sur les urls et les minifie
     *
     * @param  string  $text          Texte à modifier
     * @param  integer $linkMaxLength [Optionnel] Longueur maximum des liens
     * @param  integer $linkMaxLength [Optionnel] Target des liens
     * @return string	              Texte avec des liens minifiés
     */
    public function text2link($text, $linkMaxLength = null, $target = "_blank")
    {
        $matches = null;
        $regex = "#((http|https)://(\S*?\.\S*?))(\s|\;|\)|\]|\[|\{|\}|\"|'|:|\<|$|\.\s)#ie";
        preg_match_all($regex, $text, $matches);

        foreach ($matches[1] as $url) {
            if (strncmp($url, 'http://', 7)) {
                $shortUrl = substr($url, 6);
            } elseif (strncmp($url, 'https://', 8)) {
                $shortUrl = substr($url, 7);
            } else {
                $shortUrl = $url;
            }

            // On coupe si le lien est trop long
            if (!empty($linkMaxLength) && strlen($url) > $linkMaxLength) {
                $shortUrl = substr($shortUrl, 0, $linkMaxLength - 3) . '...';
            }

            $link = '<a href="' . $url . '" target="' . $target . '">' . $shortUrl . '</a>';
            $text = str_replace($url, $link, $text);
        }

        return $text;
    }

    /**
     * Retourne le nom de l'extension
     *
     * @return string Nom de l'extension
     */
    public function getName()
    {
        return 'webnet_swissarmy_core_twig_extension';
    }
}
