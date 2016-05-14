<?php

namespace Lcdp\AdminBundle\Controller;

use DateTime;
use Lcdp\AdminBundle\Form\AlbumForm;
use Lcdp\AdminBundle\Form\EventForm;
use Lcdp\AdminBundle\Form\FiltersForm;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Album;
use Lcdp\CommonBundle\Entity\Event;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class ContentController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class ContentController extends BaseController
{
    /**
     * Permet de supprimer un contenu qui peut être supprimé (Page ou News)
     *
     * @param string  $content Type du contenu
     * @param integer $id      Identifiant de la page à supprimer
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function softDeleteAction($content, $id)
    {
        $page = $this->getRepository($content)->find($id);

        if (empty($page) || ($content == 'Page' && !$page->getCanBeDeleted())) {
            throw $this->createAccessDeniedException();
        }

        $page->setIsDeleted(true);
        $page->setIsPublished(false);
        $page->setModifiedAt(new DateTime());
        $this->persist($page, true);

        $this->successFlash('Element supprimé !');

        return $this->redirect($this->generateUrl('lcdp_admin_' . strtolower($content)));
    }

    /**
     * Permet de publier un contenu (Page ou News)
     *
     * @param boolean $status  Status de la publication
     * @param string  $content Type du contenu
     * @param integer $id      Identifiant de la page à supprimer
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function publishContentAction($status, $content, $id)
    {
        $page = $this->getRepository($content)->find($id);

        if (empty($page)) {
            throw $this->createAccessDeniedException();
        }

        $page->setIsPublished($status);
        $page->setModifiedAt(new DateTime());
        $page->setPublicatedAt(($status) ? new DateTime() : null);
        $this->persist($page, true);

        $this->addFlashMessage('success', "Le contenu vient d'être " . (($status) ? 'publié' : 'dépublié') . " !");

        return $this->redirect(
            $this->generateUrl('lcdp_admin_' . strtolower($content) . '_edit', array('id' => $page->getId()))
        );
    }

    /**
     * Permet de liste les vidéos
     *
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function videosListAction()
    {
        $pages = $this->getRepository('StaticContent')->getList();

        return array(
            'pages' => $pages
        );
    }

    /**
     * Permet de liste les albums
     *
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function albumsListAction(Request $request)
    {
        $form = $this->createForm(new FiltersForm());

        $form->handleRequest($request);

        $albums = $this->getRepository('Album')->getList();

        return array(
            'albums' => $albums,
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer album
     *
     * @param Request $request Composant request
     * @param integer $id      Identifiant de l'album à éditer
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function albumsEditAction(Request $request, $id)
    {
        if (is_null($id)) {
            $album = new Album();
        } else {
            $album = $this->getRepository('Album')->find($id);
        }

        // Sécurité
        if (empty($album)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(new AlbumForm(), $album);

        $form->handleRequest($request);

        if ($form->isValid()) {
            $formData = $request->get('album_form');
            $this->modifiedAt = new DateTime();
            $album->setSlug($this->get('lcdp.utils.service')->generateSlug('Album', $album));

            $this->persist($album, true);
            $this->addFlashMessage('success');

            return $this->redirect($this->generateUrl('lcdp_admin_album_edit', array('id' => $album->getId())));
        }

        return array(
            'form' => $form->createView(),
            'album' => $album
        );
    }

    /**
     * Permet d'éditer album
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function aTestEditAction()
    {
        return array();
    }
}
