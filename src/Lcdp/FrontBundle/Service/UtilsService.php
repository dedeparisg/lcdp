<?php

namespace Lcdp\FrontBundle\Service;

use Webnet\Bundle\SwissArmyBundle\Util\StringUtils;

/**
 * Service global au site
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class UtilsService
{

    protected $em;

    /**
     * Constructeur du service Utils
     */
    public function __construct($em)
    {
        $this->em = $em;
    }

    /**
     * Permet de générer un slug en s'assurant de l'unicité de celui-ci
     *
     * @param string  Type de contenu
     * @param string  Titre à slugifier
     * @return string
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function generateSlug($contentType, $content)
    {
        $slug = StringUtils::slugify($content->getTitle());

        $content = $this->em->getRepository('LcdpCommonBundle:' . $contentType)->getList(
            array(
                'diff_id' => is_null($content->getId()) ? 0 : $content->getId(),
                'section' => $content->getSection(),
                'slug' => $slug,
                'is_published' => true
            )
        );

        if (!empty($content)) {
            for ($i = 1; $i < 1000; $i++) {
                $content = $this->em->getRepository('LcdpCommonBundle:' . $contentType)->findBy(array('slug' => $slug . '-' . $i));

                if (empty($content)) {
                    $slug = $slug . '-' . $i;
                    break;
                }
            }
        }

        return $slug;
    }
}
