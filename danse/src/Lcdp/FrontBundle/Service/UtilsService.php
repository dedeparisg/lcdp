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
            array(
                'isPublished' => true
            )
        );

        if (!empty($content)) {
            for ($i = 1; $i < 1000; $i++) {
                $content = $this->em->getRepository('LcdpCommonBundle:' . $contentType)->findBy(
                    array('slug' => $slug . '-' . $i)
                );

                if (empty($content)) {
                    $slug = $slug . '-' . $i;
                    break;
                }
            }
        }

        return $slug;
    }
}
