<?php
namespace Lcdp\FrontBundle\Controller;

use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\FrontBundle\Form\ContactForm;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class ContactController extends BaseController
{
    /**
     * Permet d'afficher la page de contact
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function indexAction()
    {
        $form = $this->createForm(new ContactForm());

        return array(
            'form' => $form->createView()
        );
    }
}
