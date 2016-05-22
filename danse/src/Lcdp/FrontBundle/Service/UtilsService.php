<?php

namespace Lcdp\FrontBundle\Service;

use Doctrine\ORM\EntityManager;
use Webnet\Bundle\SwissArmyBundle\Util\StringUtils;

/**
 * Class UtilsService
 *
 * @package Lcdp\FrontBundle\Service
 */
class UtilsService
{
    /**
     * @var EntityManager $em
     */
    protected $em;

    /**
     * UtilsService constructor.
     *
     * @param EntityManager $em Le gestionnaire d'entité
     */
    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    /**
     * Permet de générer un slug en s'assurant de l'unicité de celui-ci
     *
     * @param string $contentType Type de contenu
     * @param string $content     Titre à slugifier
     * @return string
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function generateSlug($contentType, $content)
    {
        $slug = StringUtils::slugify($content->getTitle());

        $content = $this->em->getRepository('LcdpCommonBundle:' . $contentType)->getList(
            array('slug' => $slug)
        );

        if (!empty($content)) {
            for ($i = 0; $i < 1000; $i++) {
                $tmpSlug = $slug;
                if ($i > 0) {
                    $tmpSlug .= '-' . $i;
                }

                $content = $this->em->getRepository('LcdpCommonBundle:' . $contentType)->findBy(
                    array('slug' => $tmpSlug)
                );

                if (empty($content)) {
                    return $tmpSlug;
                }
            }
        }

        return $slug;
    }
}
