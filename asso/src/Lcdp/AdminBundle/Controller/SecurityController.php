<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\LostPasswordType;
use \Lcdp\CommonBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContext;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class SecurityController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class SecurityController extends BaseController
{
    /**
     * Fonction de login
     *
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function loginAction(Request $request)
    {
        $session = $request->getSession();

        // get the login error if there is one
        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $session->get(SecurityContext::AUTHENTICATION_ERROR);
            $session->remove(SecurityContext::AUTHENTICATION_ERROR);
        }
        return $this->render('LcdpAdminBundle:Security:login.html.twig', array(
            // last username entered by the user
            'last_username' => $session->get(SecurityContext::LAST_USERNAME),
            'error'         => $error,
        ));
    }

    /**
     * Perte de mot de passe
     *
     * @Route("/lostpassword", name="auth_lostpassword")
     * @Method({"GET", "POST"})
     * @Template("LcdpAdminBundle:Security:lostPassword.html.twig")
     *
     * @param  Request $request La requête courante
     * @throws \Exception
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function lostPasswordAction(Request $request)
    {
        // Création du formulaire
        $form = $this->createForm(new LostPasswordType());

        // Traitement de la demande
        if ($form->handleRequest($request) && $form->isValid()) {
            // Création d'un jeton de réinitialisation et envoi d'un mail
            try {
                $this->get('lcdp.users.lostpassword')->handleRequest($form->getData()['email']);
                $this->addFlashMessage('success', "Un email contenant un lien permettant de réinitialiser votre mot de passe vient de vous être envoyé");
            } catch (\Exception $e) {
                $this->addFlashMessage('error', $e->getMessage());
            }

            return $this->redirect($this->generateUrl('auth_lostpassword'));
        }

        return array('form' => $form->createView());
    }

    /**
     * Réinitialisation du mot de passe
     *
     * @Route("/lostpassword/{token}/reinitialize", name="auth_lostpassword_reinit")
     * @Method({"GET", "POST"})
     * @Template(":Authentication:reinitPassword.html.twig")
     *
     * @param  Request $request La requête courante
     * @param  string  $token   Jeton à usage unique de réinitialisation de mot de passe
     * @throws \Exception
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function reinitPasswordAction(Request $request, $token)
    {
        if (!$this->get('lcdp.users.lostpassword')->isValidToken($token)) {
            $this->addFlashMessage('error', "Ce lien n'est plus valable.");
            return $this->redirect($this->generateUrl('users_list'));
        }

        // Création du formulaire
        $form = $this->createForm(new LostPasswordReinitializeType());

        // Traitement de la demande
        if ($form->handleRequest($request) && $form->isValid()) {
            try {
                // Modification du mot de passe de l'utilisateur
                $this->get('lcdp.users.lostpassword')->changePassword($token, $form->getData()['password']);
                $this->addFlashMessage('success', "Votre mot de passe a été modifié avec succès");
            } catch (\Exception $e) {
                $this->addFlashMessage('error', $e->getMessage());
            }

            return $this->redirect($this->generateUrl('users_list'));
        }

        return array(
            'form' => $form->createView()
        );
    }
}
