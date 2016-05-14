<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\EventForm;
use Lcdp\AdminBundle\Form\FiltersForm;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Event;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class NewsController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class EventController extends BaseController
{
    /**
     * Permet de lister les événements
     *
     * @param Request $request Composant request
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function listAction(Request $request)
    {
        $form = $this->createForm(new FiltersForm());

        $form->handleRequest($request);

        $events = $this->getRepository('Event')->getList($request->get('filters_form'));

        return array(
            'events' => $events,
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer un événement
     *
     * @param Request $request Composant request
     * @param integer $id      Identifiant de l'actualité
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function editAction(Request $request, $id = null)
    {

        if (is_null($id)) {
            $event = new Event();
        } else {
            $event = $this->getRepository('Event')->find($id);
        }

        // Sécurité
        if (empty($event)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(new EventForm(), $event);

        if ($form->handleRequest($request) && $request->getMethod() == "POST") {
            if ($form->isValid()) {
                $this->modifiedAt = new \DateTime();
                $event->setSlug($this->get('lcdp.utils.service')->generateSlug('Event', $event));

                $this->persist($event, true);
                $this->addFlashMessage('success');

                return $this->redirect($this->generateUrl('lcdp_admin_event_edit', array('id' => $event->getId())));
            } else {
                $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement de l'évenement.");

                echo "André Debug";
                echo "<pre>";
                \Doctrine\Common\Util\Debug::dump($form->getErrorsAsString());
                echo "</pre>";
                die(__METHOD__);
            }
        }

        return array(
            'form' => $form->createView(),
            'event' => $event
        );
    }
}