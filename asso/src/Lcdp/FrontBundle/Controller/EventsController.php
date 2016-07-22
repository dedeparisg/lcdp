<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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
     * @param Request $request La requête courante
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function listAction(Request $request)
    {
        $nbElementsPerPage = $this->getParameter('pagination_front_all_events');
        $currentPage = $request->query->get('page') ? : 1;
        $nbNews = $this->getRepository('Event')->countEvents(array('isPublished' => true));

        $events = $this->getRepository('Event')->getList(
            array('isPublished' => true),
            array('publication' => 'DESC'),
            $nbElementsPerPage,
            ($currentPage - 1) * $nbElementsPerPage
        );

        return array(
            'events' => $events,
            'currentPage' => $currentPage,
            'nbPages' => ceil($nbNews / $nbElementsPerPage),
            'url' => $this->generateUrl('front_events') . '?page=',
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

        if (empty($event)) {
            throw new NotFoundHttpException();
        }

        return array(
            'event' => $event
        );
    }
}
