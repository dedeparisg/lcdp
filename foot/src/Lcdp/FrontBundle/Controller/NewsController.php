<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class NewsController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class NewsController extends BaseController
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
        $news = $this->getRepository('News')->findOneByslug($slug);

        return array(
            'news' => $news
        );
    }
}
