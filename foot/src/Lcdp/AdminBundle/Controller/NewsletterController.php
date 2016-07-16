<?php

namespace Lcdp\AdminBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;

/**
 * Class NewsletterController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class NewsletterController extends BaseController
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction()
    {
        return $this->render('LcdpAdminBundle:Newsletter:index.html.twig');
    }
}
