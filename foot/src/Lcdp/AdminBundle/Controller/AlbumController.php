<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\AlbumType;
use Lcdp\AdminBundle\Form\Type\FiltersType;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Album;
use Lcdp\CommonBundle\Entity\AlbumPicture;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Class AlbumController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class AlbumController extends BaseController
{
    /**
     * Permet de lister les albums
     *
     * @param Request $request Composant request
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function listAction(Request $request)
    {
        $form = $this->createForm(new FiltersType(), null, array('year' => true));
        $form->handleRequest($request);

        $albums = $this->getRepository('Album')->getList($request->get('filters_form'));

        return array(
            'albums' => $albums,
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer un album
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
            $oldAlbumGroups = clone $album->getAlbumGroups();
        }

        // Sécurité
        if (empty($album)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(new AlbumType(), $album);

        if ($form->handleRequest($request) && $request->getMethod() == "POST") {
            if ($form->isValid()) {
                $album->setModifiedAt(new \DateTime());
                $album->setSlug($this->get('lcdp.utils.service')->generateSlug('Album', $album));

                if (isset($oldAlbumGroups) && !empty($oldAlbumGroups)) {
                    foreach ($oldAlbumGroups as $oldAlbumGroup) {
                        $this->remove($oldAlbumGroup);
                    }
                }

                foreach ($album->getAlbumGroups() as $group) {
                    $group->setAlbum($album);
                    $this->persist($group);
                }

                $this->persist($album);
                $this->flush();
                $this->addFlashMessage('success');

                return $this->redirect($this->generateUrl('lcdp_admin_album_edit', array('id' => $album->getId())));
            } else {
                $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement de l'album.");
            }
        }

        return array(
            'form' => $form->createView(),
            'album' => $album
        );
    }
}