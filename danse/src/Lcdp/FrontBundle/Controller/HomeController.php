<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class HomeController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class HomeController extends BaseController
{
    /**
     * Permet d'afficher la page d'accueil
     *
     * @param Request $request La requête courante
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function indexAction(Request $request)
    {
        $nbElementsPerPage = $this->getParameter('pagination_front_home_news');
        $currentPage = $request->query->get('page') ? : 1;
        $nbNews = $this->getRepository('News')->countNews(array('isPublished' => true));

        $news = $this->getRepository('News')->getList(
            array('isPublished' => true),
            array('publication' => 'DESC'),
            $nbElementsPerPage,
            ($currentPage - 1) * $nbElementsPerPage
        );

        return array(
            'news' => $news,
            'currentPage' => $currentPage,
            'nbPages' => ceil($nbNews / $nbElementsPerPage),
            'url' => $this->generateUrl('homepage') . '?page=',
            'ref_sections_routing' => $this->getParameter('ref_sections_routing')
        );
    }

    /**
     * Permet de gérer l'affichage du menu des pages (menu de gauche)
     *
     * @return array
     *
     * @Template("LcdpFrontBundle:Components:menu-left.html.twig")
     * @author André Tapia <atapia@webnet.fr>
     */
    public function menuLeftAction()
    {
        $pages = $this->getRepository('Page')->getList(
            array('isPublished' => true),
            array(
                'position' => 'ASC',
                'publicatedAt' => "DESC"
            )
        );

        return array(
            'pages' => $pages
        );
    }

    /**
     * Permet de gérer l'affichage du menu des pages (menu de droite)
     *
     * @return array
     *
     * @Template("LcdpFrontBundle:Components:menu-right.html.twig")
     * @author André Tapia <atapia@webnet.fr>
     */
    public function menuRightAction()
    {
        $news = $this->getRepository('Event')->getList(
            array('isPublished' => true,),
            array(
                'position' => 'ASC',
                'publicatedAt' => "DESC"
            ),
            array('limit' => $this->getParameter('pagination_front_home_events'))
        );

        $albums = $this->getRepository('Album')->getList(
            array('isPublished' => true),
            array('publication' => 'DESC'),
            array('limit' => $this->getParameter('pagination_front_home_albums'))
        );

        return array(
            'albums' => $albums,
            'news' => $news
        );
    }
}
