<?php

namespace Lcdp\CommonBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Lcdp\CommonBundle\Entity\Permission;

/**
 * Chargement des permissions de l'application
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class LoadPermissionData implements FixtureInterface, OrderedFixtureInterface
{
    /**
     * {@inheritDoc}
     * </@toreview DME>
     */
    public function load(ObjectManager $manager)
    {
        $this->createPermission($manager, Permission::USER_INFOS, true, true, true, true, 'Gestion des utilisateurs - Infos générales/Mon compte');
        $this->createPermission($manager, Permission::USER_PROFILE, true, true, true, false, 'Gestion des utilisateurs - Profile/Groupes utilisateurs');

        $this->createPermission($manager, Permission::ADMIN_CONFIG, true, true, true, false, 'Administration - Gestion des configurations du site');
        $this->createPermission($manager, Permission::NEWSLETTER, true, true, true, true, 'Administration - Newsletter');
        $this->createPermission($manager, Permission::MEMBERS, true, false, false, false, "Administration - Gestion des membres");

        $this->createPermission($manager, Permission::CONTENT_VIDEOS, true, false, false, false, "Administration - Gestion des vidéos");
        $this->createPermission($manager, Permission::CONTENT_PICTURES, true, false, false, false, "Administration - Gestion des photos");
        $this->createPermission($manager, Permission::CONTENT_PAGES, true, false, false, false, "Administration - Gestion du contenu des pages");
        $this->createPermission($manager, Permission::CONTENT_EVENTS, true, false, false, false, "Administration - Gestion des événements");
        $this->createPermission($manager, Permission::CONTENT_NEWS, true, false, false, false, "Administration - Gestion des actualités");

        $manager->flush();
    }

    /**
     * Crée une permission à partir des informations fournies
     *
     * @param ObjectManager $manager    Manager d'entités
     * @param string$title              Nom du profil
     * @param boolean $readable         Acces en lecture ?
     * @param boolean $creatable        Acces en ecritre ?
     * @param boolean $updatable        Acces en modification ?
     * @param boolean $deletable        Acces en suppression ?
     * @param string $description       Description de la permission
     *
     * @return RefPermission
     */
    private function createPermission($manager, $title, $readable, $creatable, $updatable, $deletable, $description)
    {
        $permission = new Permission();
        $permission->setTitle($title);
        $permission->setDescription($description);
        $permission->setDeletable($deletable);
        $permission->setReadable($readable);
        $permission->setUpdatable($updatable);
        $permission->setCreatable($creatable);
        $manager->persist($permission);

        return $permission;
    }

    /**
     * {@inheritDoc}
     */
    public function getOrder()
    {
        return 2; // l'ordre dans lequel les fichiers sont chargés
    }
}
