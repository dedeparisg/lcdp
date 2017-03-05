<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class FeedController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class FeedController extends BaseController
{
    /**
     * Generate the article feed
     *
     * @return Response XML Feed
     */
    public function newsFeedAction()
    {
        $news = $this->getRepository('News')->getList(
            array('isPublished' => true),
            array('publication' => 'DESC'),
            null,
            null,
            false
        );

        $feed = $this->get('eko_feed.feed.manager')->get('news');
        $feed->addFromArray($news);

        return new Response($feed->render('rss'));
    }

    /**
     * Generate the article feed
     *
     * @return Response XML Feed
     */
    public function eventsFeedAction()
    {
        $events = $this->getRepository('Event')->getList(
            array('isPublished' => true),
            array('publication' => 'DESC'),
            null,
            false
        );

        $feed = $this->get('eko_feed.feed.manager')->get('events');
        $feed->addFromArray($events);

        return new Response($feed->render('rss'));
    }
}
