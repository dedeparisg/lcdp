<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\UserFilterType;
use Lcdp\AdminBundle\Form\Type\UserType;
use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use JMS\SecurityExtraBundle\Annotation\Secure;
use Symfony\Component\HttpFoundation\Request;


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
     * @param Request $request La requete courante
     *
     * @return array
     */
    public function indexAction(Request $request)
    {
        $form = $this->createForm(new UserFilterType());

        $form->handleRequest($request);

        $users = $this->getRepository('User')->getList($request->get('filters_form'));

        return array(
            'form' => $form->createView(),
            'users' => $users
        );
    }

    /**
     * Ajout / Edition d'un utilisateur
     *
     * @Route("/users/new", name="lcdp_admin_users_new")
     * @Route("/users/{id}/edit", name="lcdp_admin_users_edit", requirements={"id": "\d+"})
     * @Method({"GET", "POST"})
     * @Secure(roles="UNAPEI_USER_INFOS_UPDATE")
     * @Template()
     *
     * @param Request $request Requête courante
     * @param mixed   $id      Identifiant de l'utilisateur
     * @return array
     */
    public function editAction(Request $request, $id = null)
    {
        if ($isNew = is_null($id)) {
            $user = $this->get('lcdp.common.users')->getEmptyUser();
        } else {
            $user = $this->get('lcdp.common.users')->getUser($id);
        }

        $form = $this->createForm(
            new UserType(),
            $user,
            array(
                'validation_groups' => $isNew ? array('registration') : array('Default'),
                'userPermissions' => $request->getSession()->get('userPermissions'),
                'isNew' => $isNew
            )
        );
        $form->get('locked')->setData($user->getLocked() ? 1 : 0);

        if ($form->handleRequest($request)) {
            if ($form->isValid()) {
                $this->get('lcdp.common.users')->createorUpdateUser($user);
                $this->addFlashMessage('success');
                return $this->redirectToRoute('lcdp_admin_users_edit', array('id' => $user->getId()));
            }
        }

        return array(
            'form' => $form->createView(),
            'isNew' => $isNew
        );
    }
}
