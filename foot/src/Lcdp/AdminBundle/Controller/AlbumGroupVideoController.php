<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\VideoType;
use Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AlbumGroupVideoController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class AlbumGroupVideoController extends BaseController
{
    /**
     * Permet de gérer les vidéos d'un album pour un groupe spécifique
     *
     * @param Request $request La requête courante
     * @param integer $albumId Identifiant de l'album concerné
     * @param integer $groupId Identifiant du groupe concerné
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function manageAction(Request $request, $albumId, $groupId)
    {
        $albumGroup = $this->getRepository('AlbumGroup')->find($groupId);

        // Sécutiré
        if (empty($albumGroup)) {
            throw $this->createAccessDeniedException();
        } else {
            $album = $albumGroup->getAlbum();
            if (empty($album) || $album->getId() != $albumId) {
                throw $this->createAccessDeniedException();
            }
        }

        $form = $this->createForm(new VideoType(), $albumGroup);

        if ($form->handleRequest($request) && $request->getMethod() == "POST") {
            if ($form->isValid()) {
                $albumGroup->setModifiedAt(new \DateTime());

                foreach ($albumGroup->getAlbumVideos() as $albumVideo) {
                    $albumVideo->setAlbumGroup($albumGroup);
                    $this->persist($albumVideo);
                }
                $this->persist($albumGroup);
                $this->flush();

                $this->addFlashMessage('success');

                return $this->redirect(
                    $this->generateUrl(
                        'lcdp_admin_album_group_video',
                        array(
                            'albumId' => $album->getId(),
                            'groupId' => $albumGroup->getId()
                        )
                    )
                );
            } else {
                $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement de la vidéo.");
            }
        }
        return array(
            'form' => $form->createView(),
            'albumGroup' => $albumGroup
        );
    }

    /**
     * Permet de supprimer une video d'un album
     *
     * @param integer $albumId Identifiant de l'album concerné
     * @param integer $groupId Identifiant du groupe concerné
     * @param integer $videoId Identifiant de la video concerné
     * @return JsonResponse
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function removeAlbumVideoAction($albumId, $groupId, $videoId)
    {
        $video = $this->getRepository('AlbumVideo')->find($videoId);

        // Sécutiré
        if (empty($video)) {
            return new JsonResponse(array('success' => false));
        } else {
            $albumGroup = $video->getAlbumGroup();

            if (empty($albumGroup) || $albumGroup->getId() != $groupId) {
                return new JsonResponse(array('success' => false));
            } else {
                $album = $albumGroup->getAlbum();

                if (empty($album) || $album->getId() != $albumId) {
                    return new JsonResponse(array('success' => false));
                }
            }
        }

        $this->remove($video, true);

        return new JsonResponse(array('success' => true));
    }
}