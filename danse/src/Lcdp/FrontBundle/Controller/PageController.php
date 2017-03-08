<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Page;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class PageController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class PageController extends BaseController
{
    /**
     * Permet de gérer l'affichage des pages
     *
     * @param string $slug  Le slug de la page concernée
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function viewAction($slug)
    {
        /** @var Page $page */
        $page = $this->getRepository('Page')->findOneByslug($slug);

        return array(
            'page' => $page,
            'breadcrumb' => $this->breadcrumb(
                array($page->getTitle() => '')
            )
        );
    }
}
