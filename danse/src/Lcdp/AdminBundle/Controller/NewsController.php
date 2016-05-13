<?php

namespace Lcdp\AdminBundle\Controller;

use Lcdp\AdminBundle\Form\FiltersForm;
use Lcdp\AdminBundle\Form\NewsForm;
use Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Lcdp\CommonBundle\Entity\News;

/**
 * Class NewsController
 *
 * @package Lcdp\AdminBundle\Controller
 */
class NewsController extends BaseController
{
    /**
     * Permet de lister les news
     *
     * @param Request $request Composant request
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function listAction(Request $request)
    {
        $form = $this->createForm(new FiltersForm());

        $form->handleRequest($request);

        $pages = $this->getRepository('News')->getList($request->get('filters_form'));

        return array(
            'pages' => $pages,
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer une actualité
     *
     * @param Request $request Composant request
     * @param integer $id      Identifiant de l'actualité
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function editAction(Request $request, $id = null)
    {
        if (is_null($id)) {
            $news = new News();
        } else {
            $news = $this->getRepository('News')->find($id);
        }

        // Sécurité
        if (empty($news)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(new NewsForm(), $news);

        if ($form->handleRequest($request) && $request->getMethod() == "POST") {

            if ($form->isValid()) {

                $file = $request->files->get('news_form');

                if (!is_null($file['file'])) {
                    // On génère l'uid du fichier
                    $uid = $this->get('lcdp.filestore')->generateUniqueId(strtolower($file['file']->getClientOriginalExtension()));

                    // On ajoute le média dans le filestore
                    $this->get('lcdp.filestore')->addMedia(
                        $file['file'],
                        $uid,
                        strtolower($file['file']->getClientOriginalExtension())
                    );
                    $news->setImage($uid);
                }

                // On s'occupe des données saisie
                $this->modifiedAt = new \DateTime();
                $news->setSlug($this->get('lcdp.utils.service')->generateSlug('News', $news));

                $this->persist($news);
                $this->flush();

                $this->addFlashMessage('success');

                return $this->redirect($this->generateUrl('lcdp_admin_news_edit', array('id' => $news->getId())));
            } else {
                $this->addFlashMessage('danger', "Une erreur est survenue lors de l'enregistrement de l'actualité.");
            }
        }

        return array(
            'form' => $form->createView(),
            'news' => $news,
            'imageUrl' => $this->get('lcdp.filestore')->getUrl($news->getImage(), 'jpg')
        );
    }
}
