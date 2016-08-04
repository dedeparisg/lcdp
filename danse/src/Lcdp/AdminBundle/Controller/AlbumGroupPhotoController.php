<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\PhotoType;
use Lcdp\AdminBundle\Form\Type\VideoType;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\AlbumPicture;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class AlbumGroupPhotoController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class AlbumGroupPhotoController extends BaseController
{
    /**
     * Permet de gérer les photos d'un album pour un groupe spécifique
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

        $form = $this->createForm(new PhotoType(), $albumGroup);

        if ($form->handleRequest($request) && $request->getMethod() == "POST") {
            if ($form->isValid()) {
                $albumGroup->setModifiedAt(new \DateTime());
                $isOk = false;

                foreach ($albumGroup->getImgFiles() as $imgFile) {
                    if (is_null($imgFile)) {
                        continue;
                    }
                    $isOk = true;

                    $picture = new AlbumPicture();
                    $picture->setAlbumGroup($albumGroup);
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

                $this->persist($albumGroup);
                $this->flush();

                if ($isOk) {
                    $this->addFlashMessage('success');
                } else {
                    $this->addFlashMessage('danger', "Aucune image n'a été sélectionnée.");
                }

                return $this->redirect(
                    $this->generateUrl(
                        'lcdp_admin_album_group_photo',
                        array(
                            'albumId' => $album->getId(),
                            'groupId' => $albumGroup->getId()
                        )
                    )
                );
            } else {
                $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement des photos.");
            }
        }

        return array(
            'form' => $form->createView(),
            'albumGroup' => $albumGroup,
            'pictures' => $this->getRepository('AlbumPicture')->getAllByAlbum($albumGroup->getId())
        );
    }

    /**
     * Permet de supprimer une photo d'un album
     *
     * @param integer $albumId   Identifiant de l'album concerné
     * @param integer $groupId   Identifiant du groupe concerné
     * @param integer $pictureId Identifiant de la photo concerné
     * @return JsonResponse
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function removeAlbumPictureAction($albumId, $groupId, $pictureId)
    {
        $photo = $this->getRepository('AlbumPicture')->find($pictureId);

        // Sécutiré
        if (empty($photo)) {
            return new JsonResponse(array('success' => false));
        } else {
            $albumGroup = $photo->getAlbumGroup();

            if (empty($albumGroup) || $albumGroup->getId() != $groupId) {
                return new JsonResponse(array('success' => false));
            } else {
                $album = $albumGroup->getAlbum();

                if (empty($album) || $album->getId() != $albumId) {
                    return new JsonResponse(array('success' => false));
                }
            }
        }

        $this->remove($photo, true);

        return new JsonResponse(array('success' => true));
    }


    /**
     * Permet de maj la position d'une photo
     *
     * @param Request $request La requête courante
     * @param integer $albumId Identifiant de l'album concerné
     * @param integer $groupId Identifiant du groupe concerné
     * @return JsonResponse
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function updatePriorityAlbumPictureAction(Request $request, $albumId, $groupId)
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

        foreach ($request->request->get('data') as $pictureId => $priority) {
            $picture = $this->getRepository('AlbumPicture')->find($pictureId);
            $picture->setPriority($priority);
            $this->persist($picture);
        }

        $this->flush();

        return new JsonResponse(array('success' => true));
    }
}