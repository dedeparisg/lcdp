<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\AlbumForm;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Album;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AlbumController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class AlbumController extends BaseController
{
    /**
     * Permet d'éditer un album (vidéos et/ou photos)
     *
     * @param Request $request Composant request
     * @param integer $id      Identifiant de l'album concerné
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function editAction(Request $request, $id = null)
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

        if ($form->handleRequest($request) && $request->getMethod() == "POST") {
            if ($form->isValid()) {
                $album->setModifiedAt(new DateTime());
                $album->setSlug($this->get('lcdp.utils.service')->generateSlug('Album', $album));

                $this->persist($album, true);
                $this->addFlashMessage('success');

                return $this->redirect($this->generateUrl('lcdp_admin_album_edit', array('id' => $album->getId())));
            } else {
                $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement de l'album.");
            }
        }

        return array(
            'form' => $form->createView(),
            'event' => $album
        );
    }
}