<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Lcdp\CommonBundle\Entity\Album;
use Lcdp\CommonBundle\Entity\AlbumGroup;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Class AlbumController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class AlbumController extends BaseController
{
    /**
     * Permet de gérer l'affichage des albums par années
     *
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function listAlbumYearsAction()
    {
        $albums = $this->getRepository('Album')->getListByYear(array('isPublished' => true));

        return array(
            'albums' => $albums,
            'breadcrumb' => $this->breadcrumb(
                array('Tous les albums' => '')
            )
        );
    }

    /**
     * Permet de gérer l'affichage des albums d'une année
     *
     * @param integer $year L'année concernée
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function listAlbumsAction($year)
    {
        $albums = $this->getRepository('Album')->getList(
            array(
                'isPublished' => true,
                'year' => $year
            )
        );

        return array(
            'albums' => $albums,
            'year' => $year,
            'breadcrumb' => $this->breadcrumb(
                array(
                    'Tous les albums' => $this->generateUrl('front_albums_years'),
                    $year => ''
                )
            )
        );
    }

    /**
     * Permet de gérer l'affichage des groupes d'un album
     *
     * @param integer $year L'année concernée
     * @param string $album Le slug de l'album
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function listAlbumGroupsAction($year, $album)
    {
        $album = $this->getRepository('Album')->findOneBy(
            array(
                'isPublished' => true,
                'slug' => $album
            )
        );

        if (empty($album) || $album->getStartDateYear() != $year) {
            throw new NotFoundHttpException();
        }

        // Permet de trier à la volée les groupes de l'album
        $albumGroups = array();
        $tmp = 100;
        foreach ($album->getAlbumGroups() as $group) {
            $tmp++;
            $key = empty($group->getPriority()) ? $tmp : $group->getPriority();
            $albumGroups[$key] = $group;
        }
        ksort($albumGroups);

        return array(
            'album' => $album,
            'albumGroups' => $albumGroups,
            'year' => $year,
            'breadcrumb' => $this->breadcrumb(
                array(
                    'Tous les albums' => $this->generateUrl('front_albums_years'),
                    $year => $this->generateUrl('front_albums', array('year' => $year)),
                    $album->getTitle() => ''
                )
            )
        );
    }

    /**
     * Permet de gérer l'affichage des pages
     *
     * @param integer $year      L'année concernée
     * @param string  $albumSlug Le slug de l'album
     * @param integer $groupId   L'identifiant du groupe concnernée
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function viewAction($year, $albumSlug, $groupId)
    {
        /** @var AlbumGroup $albumGroup */
        $albumGroup = $this->getRepository('AlbumGroup')->find($groupId);

        if (empty($albumGroup)) {
            throw new NotFoundHttpException();
        } else {
            $album = $albumGroup->getAlbum();

            if (empty($album) || $album->getSlug() != $albumSlug || $album->getStartDateYear() != $year) {
                throw new NotFoundHttpException();
            }
        }

        return array(
            'albumGroup' => $albumGroup,
            'pictures' => $this->getRepository('AlbumPicture')->getAllByAlbum($albumGroup->getId()),
            'breadcrumb' => $this->breadcrumb(
                array(
                    'Tous les albums' => $this->generateUrl('front_albums_years'),
                    $year => $this->generateUrl('front_albums', array('year' => $year)),
                    $album->getTitle() => $this->generateUrl('front_albums_groups', array('year' => $year, 'album' => $album->getSlug())),
                    $albumGroup->getTitle() => ''
                )
            )
        );
    }
}
