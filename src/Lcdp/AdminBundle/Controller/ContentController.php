<?php

namespace Lcdp\AdminBundle\Controller;

use DateTime;
use Lcdp\AdminBundle\Form\AlbumForm;
use Lcdp\AdminBundle\Form\EventForm;
use Lcdp\AdminBundle\Form\FiltersForm;
use Lcdp\AdminBundle\Form\NewsForm;
use Lcdp\AdminBundle\Form\PageForm;
use Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Album;
use Lcdp\CommonBundle\Entity\Event;
use Lcdp\CommonBundle\Entity\News;
use Lcdp\CommonBundle\Entity\Page;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;

class ContentController extends BaseController
{
    /**
     * Page de connexion
     */
    public function indexAction()
    {
        return $this->render('LcdpAdminBundle:Content:index.html.twig');
    }

    /**
     * Permet de lister les pages statiques que l'on peut éditer
     *
     * @param Request $request Composant request
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function pageListAction(Request $request)
    {
        $form = $this->createForm(new FiltersForm(), null, array('sections' => $this->getParameter('ref_sections')));
        $form->handleRequest($request);

        $pages = $this->getRepository('Page')->getList($request->get('filters_form'));

        return array(
            'pages' => $pages,
            'refSectionsLabel' => $this->getParameter('ref_sections_label'),
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer une page statique
     *
     * @param Request $request Composant request
     * @param integer $id      Identifiant de la page à éditer
     * @return array
     *
     * @Template
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function pageEditAction(Request $request, $id = null)
    {
        if (is_null($id)) {
            $page = new Page();
        } else {
            $page = $this->getRepository('Page')->find($id);
        }

        // Sécurité
        if (empty($page)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(
            new PageForm(),
            $page,
            array(
                'sections' => $this->getParameter('ref_sections')
            )
        );

        $form['section']->setData($page->getSection());

        $form->handleRequest($request);

        if ($form->isValid()) {
            $formData = $request->get('page_form');
            $this->modifiedAt = new DateTime();
            $page->setSection($formData['section']);

            $this->persist($page, true);
            $this->addFlashMessage('success');

            return $this->redirect($this->generateUrl('lcdp_admin_page_edit', array('id' => $page->getId())));
        }

        return array(
            'form' => $form->createView(),
            'page' => $page
        );
    }

    /**
     * Permet de lister les news
     *
     * @param Request $request Composant request
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function newsListAction(Request $request)
    {
        $form = $this->createForm(
            new FiltersForm(),
            null,
            array(
                'sections' => $this->getParameter('ref_sections')
            )
        );

        $form->handleRequest($request);

        $pages = $this->getRepository('News')->getList($request->get('filters_form'));

        return array(
            'pages' => $pages,
            'refSectionsLabel' => $this->getParameter('ref_sections_label'),
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
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function newsEditAction(Request $request, $id = null)
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

        $form = $this->createForm(
            new NewsForm(),
            $news,
            array(
                'sections' => $this->getParameter('ref_sections')
            )
        );

        $form['section']->setData($news->getSection());

        $form->handleRequest($request);

        if ($form->isValid()) {

            $file = $request->files->get('news_form');

            // On génère l'uid du fichier
            $uid = $this->get('lcdp.filestore')->generateUniqueId(strtolower($file['file']->getClientOriginalExtension()));
            // On ajoute le média dans le filestore
            $this->get('lcdp.filestore')->addMedia($file['file'], $uid,
                strtolower($file['file']->getClientOriginalExtension()));
            $news->setImage($uid);

            // On s'occupe des données saisie
            $formData = $request->get('news_form');
            $this->modifiedAt = new DateTime();
            $news->setSection($formData['section']);
            $news->setSlug($this->get('lcdp.utils.service')->generateSlug('News', $news));

            $this->persist($news, true);
            $this->addFlashMessage('success');

            return $this->redirect($this->generateUrl('lcdp_admin_news_edit', array('id' => $news->getId())));
        }

        return array(
            'form' => $form->createView(),
            'news' => $news,
            'imageUrl' => $this->get('lcdp.filestore')->getUrl($news->getImage(), 'jpg')
        );
    }

    /**
     * Permet de lister les événements
     *
     * @param Request $request Composant request
     * @return array
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function eventsListAction(Request $request)
    {
        $form = $this->createForm(
            new FiltersForm(),
            null,
            array(
                'sections' => $this->getParameter('ref_sections')
            )
        );

        $form->handleRequest($request);

        $events = $this->getRepository('Event')->getList($request->get('filters_form'));

        return array(
            'events' => $events,
            'refSectionsLabel' => $this->getParameter('ref_sections_label'),
            'form' => $form->createView()
        );
    }

    /**
     * Permet d'éditer un événement
     *
     * @param Request $request Composant request
     * @param integer $id      Identifiant de l'actualité
     * @return array
     *
     * @Template
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function eventsEditAction(Request $request, $id = null)
    {

        if (is_null($id)) {
            $event = new Event();
        } else {
            $event = $this->getRepository('Event')->find($id);
        }

        // Sécurité
        if (empty($event)) {
            throw $this->createAccessDeniedException();
        }

        $form = $this->createForm(
            new EventForm(),
            $event,
            array(
                'sections' => $this->getParameter('ref_sections')
            )
        );

        $form['section']->setData($event->getSection());

        $form->handleRequest($request);

        if ($form->isValid()) {
            $formData = $request->get('news_form');
            $this->modifiedAt = new DateTime();
            $event->setSection($formData['section']);
            $event->setSlug($this->get('lcdp.utils.service')->generateSlug('Event', $event));

            $this->persist($event, true);
            $this->addFlashMessage('success');

            return $this->redirect($this->generateUrl('lcdp_admin_event_edit', array('id' => $event->getId())));
        }

        return array(
            'form' => $form->createView(),
            'event' => $event
        );
    }

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

        $this->successFlash("Le contenu vient d'être " . (($status) ? 'publié' : 'dépublié') . " !");

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
        $form = $this->createForm(
            new FiltersForm(),
            null,
            array(
                'sections' => $this->getParameter('ref_album_sections')
            )
        );

        $form->handleRequest($request);

        $albums = $this->getRepository('Album')->getList();

        return array(
            'albums' => $albums,
            'refAlbumSectionsLabel' => $this->getParameter('ref_album_sections_label'),
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

        $form = $this->createForm(
            new AlbumForm(),
            $album,
            array('sections' => $this->getParameter('ref_album_sections'))
        );

        $form['section']->setData($album->getSection());

        $form->handleRequest($request);

        if ($form->isValid()) {
            $formData = $request->get('album_form');
            $this->modifiedAt = new DateTime();
            $album->setSection($formData['section']);
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
