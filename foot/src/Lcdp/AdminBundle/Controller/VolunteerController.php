<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\FiltersType;
use Lcdp\AdminBundle\Form\Type\NewsType;
use Lcdp\AdminBundle\Form\Type\VolunteerType;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Volunteer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Lcdp\CommonBundle\Entity\News;

/**
 * Class VolunteerController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class VolunteerController extends BaseController
{
    /**
     * Permet de lister les news
     *
     * @param Request $request Composant request
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function listAction(Request $request)
    {
        $form = $this->createForm(new FiltersType());

        $form->handleRequest($request);

        $volunteers = $this->getRepository('Volunteer')->getList($request->get('filters_form'));

        return array(
            'volunteers' => $volunteers,
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer une ficher de la rubrique "Tous bénévole"
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
            $volunteer = new Volunteer();
        } else {
            $volunteer = $this->getRepository('Volunteer')->find($id);
        }

        // Sécurité
        if (empty($volunteer)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(new VolunteerType(), $volunteer);

        if ($form->handleRequest($request) && $request->getMethod() == "POST") {

            if ($form->isValid()) {
                // On s'occupe des données saisie
                $volunteer->setModifiedAt(new \DateTime());
                $volunteer->setSlug($this->get('lcdp.utils.service')->generateSlug('Volunteer', $volunteer));

                $this->persist($volunteer);
                $this->flush();

                $this->addFlashMessage('success');

                return $this->redirect($this->generateUrl('lcdp_admin_volunteer_edit', array('id' => $volunteer->getId())));
            } else {
                $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement de l'actualité.");
            }
        }

        return array(
            'form' => $form->createView(),
            'volunteer' => $volunteer
        );
    }
}
