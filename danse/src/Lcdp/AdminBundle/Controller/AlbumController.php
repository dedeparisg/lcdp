<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\Type\AlbumType;
use Lcdp\AdminBundle\Form\Type\FiltersType;
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
                $data = $form->getData();

                echo "André Debug";
                echo "<pre>";
                \Doctrine\Common\Util\Debug::dump($album->getPhoto());
                echo "</pre>";
                echo "<pre>";
                \Doctrine\Common\Util\Debug::dump($data);
                echo "</pre>";
                echo "André Debug";
                echo "<pre>";
                print_r($_FILES);
                echo "</pre>";
                die(__METHOD__);
                die(__METHOD__);

                $album->setModifiedAt(new \DateTime());
                $album->setSlug($this->get('lcdp.utils.service')->generateSlug('Album', $album));

                foreach ($album->getAlbumVideos() as $content) {
                    $content->setAlbum($album);
                    $this->persist($content);
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
}