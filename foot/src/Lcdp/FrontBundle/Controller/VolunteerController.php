<?php

namespace Lcdp\FrontBundle\Controller;

use \Lcdp\CommonBundle\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Class VolunteerController
 *
 * @package Lcdp\FrontBundle\Controller
 */
class VolunteerController extends BaseController
{
    /**
     * Permet de gérer l'affichage des pages "Tous bénévoles"
     *
     * @param string $slug Le slug de la page concernée
     * @return array
     *
     * @Template()
     * @author André Tapia <atapia@webnet.fr>
     */
    public function viewAction($slug)
    {
        $volunteer = $this->getRepository('Volunteer')->findOneByslug($slug);

        if (empty($volunteer)) {
            throw new NotFoundHttpException();
        }

        return array(
            'volunteer' => $volunteer
        );
    }
}
