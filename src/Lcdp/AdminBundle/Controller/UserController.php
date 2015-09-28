<?php

namespace Lcdp\AdminBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;

class UserController extends BaseController
{
    /**
     * Permet de gérer les différents profils des utilisateurs
     * 
     * @author André Tapia <contact@andretapia.com>
     */
    public function profileListAction() {
        return $this->render('LcdpAdminBundle:User:profileList.html.twig');
    }
    
    /**
     * Permet d'afficher la liste des utilisateurs
     * 
     * @author André Tapia <contact@andretapia.com>
     */
    public function userListAction() {
        return $this->render('LcdpAdminBundle:User:userList.html.twig');
    }
}
