<?php

namespace Lcdp\AdminBundle\Controller;

use DateTime;
use Lcdp\CommonBundle\Controller\BaseController;

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

        $this->addFlashMessage('success', 'Element supprimé !');

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
}
