<?php
namespace Lcdp\AdminBundle\Controller;

use DateTime;
use Lcdp\AdminBundle\Form\Type\MemberFiltersType;
use Lcdp\AdminBundle\Form\Type\MemberType;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Member;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class MemberController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class MemberController extends BaseController
{
    /**
     * Permet d'afficher la liste des membres de l'association
     *
     * @param Request $request La requête courante
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function memberListAction(Request $request)
    {
        $form = $this->createForm(
            new MemberFiltersType(),
            null,
            array('categories' => $this->getParameter('ref_members_categories'))
        );

        $form->handleRequest($request);

        $members = $this->getRepository('Member')->getList($request->get('member_filters_form'));

        return array(
            'members' => $members,
            'refCategoriesLabel' => $this->getParameter('ref_members_categories_label'),
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer un membre de l'association
     *
     * @param Request      $request La requête courante
     * @param integer|null $id      Identifiant du membre à éditer
     * @return array
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
            new MemberType(),
            $member,
            array(
                'categories' => $this->getParameter('ref_members_categories')
            )
        );

        $form['category']->setData($member->getCategory());

        $form->handleRequest($request);

        if ($form->isValid()) {
            $formData = $request->get('member_form');
            $member->setModifiedAt(new DateTime());
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
