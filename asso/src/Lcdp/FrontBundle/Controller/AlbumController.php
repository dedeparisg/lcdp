<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Class AlbumController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class AlbumController extends BaseController
{
    /**
     * Permet de gérer l'affichage des pages
     *
     * @param Request $request La requête courante
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function listAction(Request $request)
    {
        $nbElementsPerPage = $this->getParameter('pagination_front_all_albums');
        $currentPage = $request->query->get('page') ? : 1;
        $nbNews = $this->getRepository('Album')->countEvents(array('isPublished' => true));

        $albums = $this->getRepository('Album')->getList(
            array('isPublished' => true),
            array('publication' => 'DESC'),
            $nbElementsPerPage,
            ($currentPage - 1) * $nbElementsPerPage
        );

        return array(
            'albums' => $albums,
            'currentPage' => $currentPage,
            'nbPages' => ceil($nbNews / $nbElementsPerPage),
            'url' => $this->generateUrl('front_albums') . '?page=',
        );
    }

    /**
     * Permet de gérer l'affichage des pages
     *
     * @param string $slug Le slug de la page concernée
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function viewAction($slug)
    {
        $album = $this->getRepository('Album')->findOneByslug($slug);

        if (empty($album)) {
            throw new NotFoundHttpException();
        }

        return array(
            'album' => $album
        );
    }
}
