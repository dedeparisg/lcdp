<?php

namespace Lcdp\CommonBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class BaseController extends Controller
{
    /**
     * Permet de récupérer un repository quelconque.
     *
     * @param string|object $entity Nom de l'entité (ex: "SpaCommonBundle:Job")
     * @return object               Instance de l'objet repository
     *
     * @author André Tapia <contact@andretapia.com>
     */
    protected function getRepository($entity)
    {
        return $this->getEntityManager()->getRepository('LcdpCommonBundle:' . $entity);
    }

    /**
     * Permet de persister une entité et éxecute le flush si flush est à true
     *
     * @param object  $entity (un Entity)
     * @param boolean $flash
     *
     * @author André Tapia <contact@andretapia.com>
     */
    protected function persist($entity, $flush = false)
    {
        $em = $this->getEntityManager();
        $em->persist($entity);

        if ($flush) {
            $em->flush($entity);
        }
    }

    /**
     * Permet de supprimer une entité et éxecute le flush si flush est à true
     *
     * @param object  $entity (un Entity)
     * @param boolean $flash
     *
     * @author André Tapia <contact@andretapia.com>
     */
    protected function remove($entity, $flush = false)
    {
        $em = $this->getEntityManager();
        $em->remove($entity);

        if ($flush) {
            $em->flush();
        }
    }

    /**
     * Execute le flush sur l'entity manager
     *
     * @author André Tapia <contact@andretapia.com>
     */
    protected function flush()
    {
        $this->getEntityManager()->flush();
    }

    /**
     * Permet de récupérer la session
     *
     * @return object Le paramètre "session" du container
     *
     * @author André Tapia <contact@andretapia.com>
     */
    protected function getSession()
    {
        return $this->get('session');
    }

    /**
     * Permet de récupérer l'entity manager
     *
     * @return object Instance de l'entity manager
     *
     * @author André Tapia <contact@andretapia.com>
     */
    protected function getEntityManager()
    {
        return $this->getDoctrine()->getManager();
    }

    /**
     * Raccourci pour le message flash en cas d'enregistement réussi
     *
     * @author André Tapia <contact@andretapia.com>
     */
    protected function successFlash($message = 'Enregistrement effectué !')
    {
        $this->getSession()->getFlashBag()->add('success', $message);
    }

    /**
     * Fonction Helper de récupération des parametres
     *
     * @param string    Nom du paramétre
     * @return mixed Valeur du parametre présent dans le fichier de conf
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getParameter($param)
    {
        return $this->container->getParameter($param);
    }

    /**
     * Raccourci pour renvoyer une 403
     *
     * @param  string $message Message d'erreur à afficher
     * @return \Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function createAccessDeniedException($message = 'Accès non autorisé !')
    {
        return new AccessDeniedHttpException($message);
    }
}
