<?php
namespace Lcdp\AdminBundle\Controller;

use DateTime;
use Lcdp\AdminBundle\Form\MemberFiltersForm;
use Lcdp\AdminBundle\Form\MemberForm;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Member;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

class MemberController extends BaseController
{

    /**
     * Permet d'afficher la liste des membres de l'association
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function memberListAction(Request $request)
    {
        $form = $this->createForm(
            new MemberFiltersForm(),
            null,
            array(
                'sections' => $this->getParameter('ref_members_sections'),
                'categories' => $this->getParameter('ref_members_categories')
            )
        );

        $form->handleRequest($request);

        $members = $this->getRepository('Member')->getList($request->get('member_filters_form'));

        return array(
            'members' => $members,
            'refSectionsLabel' => $this->getParameter('ref_members_sections_label'),
            'refCategoriesLabel' => $this->getParameter('ref_members_categories_label'),
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer un membre de l'association
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function memberEditAction(Request $request, $id = null)
    {
        if (is_null($id)) {
            $member = new Member();
        } else {
            $member = $this->getRepository('Member')->find($id);
        }

        // Sécurité
        if (empty($member)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(
            new MemberForm(),
            $member,
            array(
                'sections' => $this->getParameter('ref_members_sections'),
                'categories' => $this->getParameter('ref_members_categories')
            )
        );

        $form['section']->setData($member->getSection());
        $form['category']->setData($member->getCategory());

        $form->handleRequest($request);

        if ($form->isValid()) {
            $formData = $request->get('member_form');
            $this->modifiedAt = new DateTime();
            $member->setSection($formData['section']);
            $member->setCategory($formData['category']);

            $this->persist($member, true);
            $this->addFlashMessage('success');

            return $this->redirect($this->generateUrl('lcdp_admin_member_edit', array('id' => $member->getId())));
        }

        return array(
            'form' => $form->createView(),
            'member' => $member
        );
    }
}
