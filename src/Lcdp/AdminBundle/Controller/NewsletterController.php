<?php

namespace Lcdp\AdminBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;

class NewsletterController extends BaseController
{
    public function indexAction()
    {
        return $this->render('LcdpAdminBundle:Newsletter:index.html.twig');
    }
}
