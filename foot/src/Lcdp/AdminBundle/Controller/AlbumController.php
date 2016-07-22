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
        $form = $this->createForm(new FiltersType());
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

                foreach ($album->getAlbumVideos() as $content) {
                    $content->setAlbum($album);
                    $this->persist($content);
                }

                foreach ($album->getImgFiles() as $imgFile){
                    $picture = new AlbumPicture();
                    $picture->setAlbum($album);
                    $picture->setPriority(0);

                    // On génère l'uid du fichier
                    $uid = $this->get('lcdp.filestore')->generateUniqueId(strtolower($imgFile->getClientOriginalExtension()));

                    // On ajoute le média dans le filestore
                    $this->get('lcdp.filestore')->addMedia(
                        $imgFile,
                        $uid,
                        strtolower($imgFile->getClientOriginalExtension())
                    );
                    $picture->setImgAlt($uid);
                    $this->persist($picture);
                }

                $this->persist($album, true);
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

    /**
     * Permet de supprimer une image d'un album
     *
     * @param integer $albumId Identifiant de l'album concerné
     * @param integer $id      Identifiant de l'image concerné
     * @return JsonResponse
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function removeAlbumPictureAction($albumId, $id)
    {
        $album = $this->getRepository('Album')->find($albumId);

        if (empty($album)) {
            return new JsonResponse(array('success' => false));
        }

        $picture = $this->getRepository('AlbumPicture')->findOneBy(
            array(
                'album' => $album,
                'id' => $id
            )
        );

        if (empty($album)) {
            return new JsonResponse(array('success' => false));
        }

        $this->remove($picture, true);

        return new JsonResponse(array('success' => true));
    }
}