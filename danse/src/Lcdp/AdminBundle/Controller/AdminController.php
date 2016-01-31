<?php

namespace Lcdp\AdminBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;

class AdminController extends BaseController
{
    /**
     * Permet d'afficher la page d'accueil de l'administration
     * 
     * @author André Tapia <contact@andretapia.com>
     */
    public function indexAction()
    {
        return $this->render('LcdpAdminBundle:Admin:index.html.twig');
    }
    
    /**
     * Permet de gérer le paramétrages du site
     * 
     * @author André Tapia <contact@andretapia.com>
     */
    public function configAction() {
        return $this->render('LcdpAdminBundle:Admin:config.html.twig');
    }
}
