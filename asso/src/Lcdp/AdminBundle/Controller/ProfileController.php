<?php

namespace Lcdp\AdminBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use JMS\SecurityExtraBundle\Annotation\Secure;

/**
 * Class UserContProfileControllerroller
 *
 * Cette classe gère les profils des utilisateurs de l'application
 *
 * @author  André Tapia <atapia@webnet.fr>
 * @package Lcdp\AdminBundle\Controller
 * @Route("/profiles")
 */
class ProfileController extends BaseController
{
    /**
     * Interface de recherche et d'affichage des utilisateurs
     *
     * @Route("/", name="lcdp_admin_profile_list")
     * @Method({"GET"})
     * @Secure(roles="LCDP_PROFILE_INFOS_READ")
     * @Template()
     *
     * @return array
     */
    public function indexAction()
    {
        return array();
    }
}
