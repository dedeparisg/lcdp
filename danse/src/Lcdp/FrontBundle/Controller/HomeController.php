<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class HomeController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class HomeController extends BaseController
{
    /**
     * Permet d'afficher la page d'accueil
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function indexAction()
    {
        $news = $this->getRepository('News')->getList(
            array('isPublished' => true),
            array('publication' => 'DESC'),
            array('limit' => $this->getParameter('pagination_front_home_news'))
        );

        $events = $this->getRepository('Event')->getList(
            array(
                'isPublished' => true,
                'futur' => true
            ),
            array('publication' => 'DESC'),
            array('limit' => $this->getParameter('pagination_front_home_events'))
        );

        return array(
            'news' => $news,
            'events' => $events,
            'ref_sections_routing' => $this->getParameter('ref_sections_routing')
        );
    }
}
