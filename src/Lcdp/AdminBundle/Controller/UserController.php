<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\UserFilterType;
use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use JMS\SecurityExtraBundle\Annotation\Secure;


/**
 * Class UserController
 *
 * Cette classe gère les utilisateurs de l'application
 *
 * @author  André Tapia <atapia@webnet.fr>
 * @package Lcdp\AdminBundle\Controller
 * @Route("/utilisateurs")
 */
class UserController extends BaseController
{
    /**
     * Interface de recherche et d'affichage des utilisateurs
     *
     * @Route("/", name="lcdp_admin_users")
     * @Method({"GET"})
     * @Secure(roles="UNAPEI_USER_INFOS_READ")
     * @Template()
     *
     * @return array
     */
    public function indexAction()
    {
        $form = $this->createForm(new UserFilterType());

        return array(
            'form' => $form->createView()
        );
    }

    /**
     * Ajout / Edition d'un utilisateur
     *
     * @Route("/users/new", name="users_new")
     * @Route("/users/{id}/edit", name="users_edit", requirements={"id": "\d+"})
     * @Method({"GET", "POST"})
     * @Secure(roles="UNAPEI_USER_INFOS_UPDATE")
     * @Template()
     *
     * @param Request $request      Requête courante
     * @param mixed $id             Identifiant de l'utilisateur
     * @return array
     */
    public function editAction(Request $request, $id = null)
    {
        if ($isNew = is_null($id)) {
            $user = $this->get('unapei.core.users')->getEmptyUser();
        } else {
            $user = $this->get('unapei.core.users')->getUser($id);
        }

        $form = $this->createForm(
            new UserType(),
            $user,
            array(
                'validation_groups' => $isNew ?  array('registration') : array('Default'),
                'userPermissions' => $request->getSession()->get('userPermissions'),
                'isNew' => $isNew
            )
        );
        $form->get('locked')->setData($user->getLocked() ? 1 : 0);

        //Vérifier les profile avec périmètre ou personne
        $isPerimeter = $this->get('unapei.core.users')->isProfilePerimeter($user);

        if ($form->handleRequest($request)) {
            if ($form->isValid()) {
                $this->get('unapei.core.users')->createorUpdateUser($user);
                $this->addFlashMessage('success', $this->trans('lg.common.success.save'));
                return $this->redirectToRoute('users_edit', array('id' => $user->getId()));
            }
        }

        return array(
            'form' => $form->createView(),
            'perimeter' => $this->getRepository('LcdpCommonBundle:OrganizationalEntity')->childrenHierarchy(null, false),
            'graphPermission' => $this->getRepository('LcdpCommonBundle:GraphPermission')->childrenHierarchy(null, false),
            'isNew' => $isNew,
            'isPerimeter' => $isPerimeter,
            'profileConditions' => json_encode(
                array(
                    'csv' => Profile::canManageExportCsv(),
                    'others' => array(Profile::ANALYSIS),
                    'profilePerimeter' => Profile::getAllProfilePerimeter(),
                    'profilePerson' => Profile::getAllProfilePerson()
                )
            )
        );
    }
}
