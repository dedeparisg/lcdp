<?php

namespace Lcdp\FrontBundle\EventListener;

use Doctrine\Common\Persistence\ObjectManager;
use Lcdp\CommonBundle\Entity\Album;
use Lcdp\CommonBundle\Entity\AlbumGroup;
use Lcdp\CommonBundle\Entity\Event;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Presta\SitemapBundle\Event\SitemapPopulateEvent;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;

/**
 * Class SitemapSubscriber
 *
 * @package Lcdp\FrontBundle\EventListener
 */
class SitemapSubscriber implements EventSubscriberInterface
{
    /**
     * @var UrlGeneratorInterface
     */
    private $urlGenerator;

    /**
     * @var ObjectManager
     */
    private $manager;

    /**
     * @param UrlGeneratorInterface $urlGenerator
     * @param ObjectManager         $manager
     */
    public function __construct(UrlGeneratorInterface $urlGenerator, $manager)
    {
        $this->urlGenerator = $urlGenerator;
        $this->manager = $manager;
    }

    /**
     * @inheritdoc
     */
    public static function getSubscribedEvents()
    {
        return [
            SitemapPopulateEvent::ON_SITEMAP_POPULATE => 'registerPages',
        ];
    }

    /**
     * @param SitemapPopulateEvent $sitemapPopulateEvent
     */
    public function registerPages(SitemapPopulateEvent $sitemapPopulateEvent)
    {
        $this->managePages($sitemapPopulateEvent, 'Page', 'front_page');
        $this->managePages($sitemapPopulateEvent, 'Event', 'front_event');
        $this->managePages($sitemapPopulateEvent, 'News', 'front_news');
        $this->manageAlbums($sitemapPopulateEvent);
    }

    /**
     * Permet d'ajouter les urls des pages au sitemap
     *
     * @param SitemapPopulateEvent $sitemapPopulateEvent Sitemap
     * @param string               $class                Nom de la classe concernée
     * @param string               $routeName            Nom de la route
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    private function managePages(SitemapPopulateEvent $sitemapPopulateEvent, $class, $routeName)
    {
        $pages = $this->manager->getRepository('LcdpCommonBundle:' . $class)->getItemsForSitemap();

        foreach ($pages as $page) {
            $url = $this->urlGenerator->generate(
                $routeName,
                ['slug' => $page->getSlug()],
                UrlGeneratorInterface::ABSOLUTE_URL
            );

            $this->populate($sitemapPopulateEvent, $url, strtolower($class));
        }
    }

    /**
     * Permet de générer les urls des albums à ajouter au sitemap
     *
     * @param SitemapPopulateEvent $sitemapPopulateEvent Sitemap
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    private function manageAlbums(SitemapPopulateEvent $sitemapPopulateEvent)
    {
        $urls = $years = array();
        $albums = $this->manager->getRepository('LcdpCommonBundle:Album')->getItemsForSitemap();
        $albumGroups = $this->manager->getRepository('LcdpCommonBundle:AlbumGroup')->getItemsForSitemap();

        /** @var Album $album */
        foreach ($albums as $album) {
            // Ajout des url "front_albums"
            if (!isset($years[$album->getStartDateYear()])) {
                $years[$album->getStartDateYear()] = true;

                $urls[] = $this->urlGenerator->generate(
                    'front_albums',
                    ['year' => $album->getStartDateYear()],
                    UrlGeneratorInterface::ABSOLUTE_URL
                );
            }

            // Ajout des urls "front_albums_groups"
            $url[] = $this->urlGenerator->generate(
                'front_albums_groups',
                [
                    'year' => $album->getStartDateYear(),
                    'album' => $album->getSlug()
                ],
                UrlGeneratorInterface::ABSOLUTE_URL
            );
        }

        /** @var AlbumGroup $albumGroup */
        foreach ($albumGroups as $albumGroup) {
            $years[$album->getStartDateYear()] = true;

            $urls[] = $this->urlGenerator->generate(
                'front_album_view',
                [
                    'year' => $albumGroup->getAlbum()->getStartDateYear(),
                    'albumSlug' => $albumGroup->getAlbum()->getSlug(),
                    'groupId' => $albumGroup->getId()
                ],
                UrlGeneratorInterface::ABSOLUTE_URL
            );
        }

        foreach ($urls as $url) {
            $this->populate($sitemapPopulateEvent, $url, 'albums');
        }
    }

    /**
     * Permet d'ajouter une url au sitemap
     *
     * @param SitemapPopulateEvent $sitemapPopulateEvent Sitemap
     * @param string               $url                  Url de la page à indexer
     * @param string               $file                 Nom du fichier sitemap à utiliser
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function populate(SitemapPopulateEvent $sitemapPopulateEvent, $url, $file)
    {
        $sitemapPopulateEvent->getUrlContainer()->addUrl(
            new UrlConcrete(
                $url,
                new \DateTime(),
                UrlConcrete::CHANGEFREQ_HOURLY,
                1
            ),
            $file
        );
    }
}