<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class EventsController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class EventsController extends BaseController
{
    /**
     * Permet d'afficher le listing de tous les évenements du site
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function listAction()
    {
        $events = $this->getRepository('Event')->getList(
            array(
                'isPublished' => true
            )
        );

        return array(
            'events' => $events,
            'ref_sections_routing' => $this->getParameter('ref_sections_routing')
        );
    }
}
