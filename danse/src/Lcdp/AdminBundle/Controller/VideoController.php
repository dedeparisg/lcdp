<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\FiltersForm;
use Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Lcdp\CommonBundle\Entity\News;

/**
 * Class VideoController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class VideoController extends BaseController
{
    /**
     * Permet d'afficher la liste les vidéos
     *
     * @param Request $request La requete courante
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function listAction(Request $request)
    {
        $form = $this->createForm(new FiltersForm());

        $form->handleRequest($request);

        $criterion = $request->get('filters_form');
        if (empty($criterion)) {
            $criterion = array('type' => 'video');
        } else {
            $criterion['type'] = 'video';
        }

        $videos = $this->getRepository('Album')->getList($criterion);

        return array(
            'videos' => $videos,
            'form' => $form->createView()
        );
    }
}