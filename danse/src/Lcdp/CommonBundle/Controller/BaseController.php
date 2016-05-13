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
     * @param object  $entity L'entité à persisté
     * @param boolean $flush  Doit-on sauvegarger l'entité courante ou pas ?
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
     * @param object  $entity L'entité à supprimer
     * @param boolean $flush  Doit-on sauvegarger la suppression ou pas ?
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
     * Raccourci afin d'ajouter un message flash
     *
     * @param string $type    Type du message flash
     * @param string $message Message à afficher
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    protected function addFlashMessage($type, $message = 'Enregistrement effectué !')
    {
        // On vérifie que le type est bien définit dans les classes boostrap
        if (in_array($type, array('success', 'danger', 'warning', 'info'))) {
            $this->get('session')->getFlashBag()->add($type, $message);
        }
    }

    /**
     * Fonction Helper de récupération des parametres
     *
     * @param string $param Nom du paramétre
     * @return mixed Valeur du parametre présent dans le fichier de conf
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getParameter($param)
    {
        return $this->container->getParameter($param);
    }
}

