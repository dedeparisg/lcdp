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
     * Permet de gérer l'affichage des pages
     *
     * @param string $slug Le slug de la page concernée
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function listAction($slug)
    {
        $events = $this->getRepository('Event')->getList(

        );

        return array(
            'events' => $events
        );
    }

    /**
     * Permet de gérer l'affichage des pages
     *
     * @param string $slug Le slug de la page concernée
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function viewAction($slug)
    {
        $event = $this->getRepository('Event')->findOneByslug($slug);

        return array(
            'event' => $event
        );
    }
}
