<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class ClubController extends BaseController
{
    /**
     * Permet d'afficher l'organigramme
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function organigramAction()
    {
        $children = array(
            '2' => array(
                'id' => 2,
                'firstName' => 'Fatima',
                'lastName' => 'Bienvenu',
                'sexe' => 'f',
                'picture' => 'default',
                'description' => 'blablabla',
                'function' => 'Membre du bureau',
                'children' => ''
            ),
            '3' => array(
                'id' => 3,
                'firstName' => 'José',
                'lastName' => '?',
                'sexe' => 'm',
                'picture' => 'default',
                'function' => 'Membre du bureau',
                'children' => ''
            ),
            '4' => array(
                'id' => 4,
                'firstName' => 'Martine',
                'lastName' => '?',
                'sexe' => 'f',
                'picture' => 'default',
                'function' => 'Membre du bureau',
                'children' => ''
            ),
            '5' => array(
                'id' => 5,
                'firstName' => 'Agnes',
                'lastName' => '?',
                'sexe' => 'f',
                'picture' => 'default',
                'function' => 'Membre du bureau',
                'children' => ''
            ),
        );

        $organigram = array(
            '1' => array(
                'id' => 1,
                'firstName' => 'Fabrice',
                'lastName' => 'Bienvenu',
                'sexe' => 'm',
                'picture' => 'default',
                'description' => 'Il est président depuis 2004 blablabla',
                'function' => 'Président',
                'children' => $children
            )
        );

        return array(
            'organigram' => $organigram
        );
    }

    /**
     * Permet d'afficher la page histoire
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function staticPageAction($contentId)
    {
        $page = $this->getRepository('Page')->find($contentId);

        return array(
            'page' => $page
        );
    }

    /**
     * Permet d'afficher la page infos
     *
     * @Template
     * @author André Tapia <contact@andretapia.com>
     */
    public function infosAction()
    {
        return array();
    }
}
