<?php

namespace Lcdp\AdminBundle\Controller;

use DateTime;
use Lcdp\AdminBundle\Form\FiltersForm;
use Lcdp\AdminBundle\Form\Type\PageType;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Page;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class PageController extends BaseController
{
    /**
     * Permet de lister les pages statiques que l'on peut éditer
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

        $pages = $this->getRepository('Page')->getList($request->get('filters_form'));

        return array(
            'pages' => $pages,
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer une page statique
     *
     * @param Request $request Composant request
     * @param integer $id      Identifiant de la page à éditer
     * @return array
     *
     * @Template
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function editAction(Request $request, $id = null)
    {
        if (is_null($id)) {
            $page = new Page();
        } else {
            $page = $this->getRepository('Page')->find($id);
        }

        // Sécurité
        if (empty($page)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(new PageType(), $page);

        if ($form->handleRequest($request) && $form->isValid()) {
            $page->setModifiedAt(new DateTime());

            foreach ($page->getPageContents() as $content) {
                $content->setPage($page);
            }

            $this->persist($page, true);
            $this->addFlashMessage('success');

            return $this->redirect($this->generateUrl('lcdp_admin_page_edit', array('id' => $page->getId())));
        }

        return array(
            'form' => $form->createView(),
            'page' => $page
        );
    }

    /**
     * Permet de
     *
     * @return JsonResponse
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function updatePositionAction(Request $request)
    {
        // Récupération des pararmètres
        $position1 = $request->request->get('position_1');
        $position2 = $request->request->get('position_2');
        $pageId1 = $request->request->get('page_1');
        $pageId2 = $request->request->get('page_2');

        if (empty($position1) || empty($position2) || empty($pageId1) || empty($pageId2)) {
            return new JsonResponse(array('type' => 'error'));
        }

        // Récupération des pages
        $page1 = $this->getRepository('Page')->find($pageId1);
        $page2 = $this->getRepository('Page')->find($pageId2);

        if (empty($page1) || empty($page2)) {
            return new JsonResponse(array('type' => 'error'));
        }

        // Sauvegarde de la position
        $page1->setPosition($position1);
        $page2->setPosition($position2);
        $this->persist($page1);
        $this->persist($page2);
        $this->flush();

        return new JsonResponse(array('type' => 'success'));
    }
}
