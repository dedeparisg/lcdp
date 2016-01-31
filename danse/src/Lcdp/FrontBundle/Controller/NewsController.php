<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class NewsController extends BaseController
{

    /**
     * Permet d'afficher le listing des news pour chacune des sections
     *
     * @param integer $sectionId Identifiant de la section
     * @return array
     * @Template
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function listAction($sectionId)
    {
        $news = $this->getRepository('News')->getList(
            array(
                'section' => $sectionId,
                'is_published' => true
            ),
            array('publication' => 'DESC')
        );

        $events = $this->getRepository('Event')->getList(
            array(
                'section' => $sectionId,
                'is_published' => true,
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

    /**
     * Permet d'afficher une news
     *
     * @param string $slug slug de l'actualité
     * @return array
     * @Template()
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function showAction($slug)
    {
        $news = $this->getRepository('News')->findBy(array('slug' => $slug));

        $events = $this->getRepository('Event')->getList(
            array(
                'section' => 21, // Danse News
                'is_published' => true,
                'futur' => true
            ),
            array('publication' => 'DESC'),
            array('limit' => $this->getParameter('pagination_front_home_events'))
        );

        return array(
            'news' => $news,
            'events' => $events
        );
    }
}
