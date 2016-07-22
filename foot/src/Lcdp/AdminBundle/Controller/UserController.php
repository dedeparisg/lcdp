<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\UserFilterType;
use Lcdp\AdminBundle\Form\Type\UserType;
use \Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\FrontBundle\Service\UtilsService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use JMS\SecurityExtraBundle\Annotation\Secure;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Webnet\Bundle\SwissArmyBundle\Util\StringUtils;
use Webnet\Bundle\SwissArmyBundle\WebnetSwissArmyBundle;

/**
 * Class UserController
 * Classe gèrant les utilisateurs de l'application
 *
 * @author  André Tapia <atapia@webnet.fr>
 * @package Lcdp\AdminBundle\Controller
 * @Route("/users")
 */
class UserController extends BaseController
{
    /**
     * Interface de recherche et d'affichage des utilisateurs
     *
     * @Route("/", name="lcdp_admin_users")
     * @Method({"GET"})
     * @Security("is_granted('LCDP_USER_INFOS_READ')")
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
     * @Route("/new", name="lcdp_admin_users_new")
     * @Route("/{id}/edit", name="lcdp_admin_users_edit", requirements={"id": "\d+"})
     * @Method({"GET", "POST"})
     * @Security("is_granted('LCDP_USER_INFOS_READ')")
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
                try {
                    $this->get('lcdp.common.users')->createorUpdateUser($user);
                    $this->addFlashMessage('success');
                    return $this->redirectToRoute('lcdp_admin_users_edit', array('id' => $user->getId()));
                } catch (\Exception $e) {
                    $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement de l'utilisateur.");
                }
            }
        }

        return array(
            'form' => $form->createView(),
            'isNew' => $isNew
        );
    }

    /**
     * Permet de générer un identifiant unique de connexion
     * Appel en Ajax depuis la fiche d'un utilisateur
     *
     * @Route("/login", name="users_login", options={"expose"=true})
     * @Method({"POST"})
     * @Secure(roles="LCDP_USER_INFOS_READ")
     *
     * @param Request $request      La requête courante
     * @return JsonResponse
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function generateUniqueIdAction(Request $request)
    {
        $firstname = StringUtils::slugify($request->request->get('firstname'));
        $lastname = StringUtils::slugify($request->request->get('lastname'));
        $email = $request->request->get('email');

        $return = $this->get('lcdp.common.users')->generateLogin($firstname, $lastname, $email);

        return new JsonResponse($return);
    }
}
