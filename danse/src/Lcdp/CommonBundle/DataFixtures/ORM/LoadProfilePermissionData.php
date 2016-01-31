<?php

namespace Lcdp\CommonBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Lcdp\CommonBundle\Entity\Permission;
use Lcdp\CommonBundle\Entity\Profile;
use Lcdp\CommonBundle\Entity\ProfilePermission;

/**
 * Affectation des permissions aux différents profiles de l'application
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class LoadProfilePermissionData implements FixtureInterface, OrderedFixtureInterface
{
    /**
     * @var array $profiles
     */
    protected $profiles;

    /**
     * @var array $permissions
     */
    protected $permissions;

    /**
     * Constructeur de classe
     */
    public function _constructor()
    {
        $this->profiles = array();
        $this->permissions = array();
    }

    /**
     * {@inheritDoc}
     *
     * </@toreview DME>
     */
    public function load(ObjectManager $manager)
    {
        $this->createProfilePermission(
            $manager,
            Profile::ADMIN,
            array(
                Permission::USER_INFOS => array(true, true, true, true),
                Permission::USER_PROFILE => array(true, true, true, false),
                Permission::ADMIN_CONFIG => array(true, true, true, false),
                Permission::CONTENT_EVENTS => array(true, true, true, true),
                Permission::CONTENT_NEWS => array(true, true, true, true),
                Permission::CONTENT_PAGES => array(true, true, true, true),
                Permission::CONTENT_PICTURES => array(true, true, true, true),
                Permission::CONTENT_VIDEOS => array(true, true, true, true),
                Permission::MEMBERS => array(true, true, true, true),
                Permission::NEWSLETTER => array(true, true, true, true),
            )
        );

        $this->createProfilePermission(
            $manager,
            Profile::AUTHOR,
            array(
                Permission::CONTENT_EVENTS => array(true, true, true, true),
                Permission::CONTENT_NEWS => array(true, true, true, true),
                Permission::CONTENT_PAGES => array(true, true, true, true),
                Permission::CONTENT_PICTURES => array(true, true, true, true),
                Permission::CONTENT_VIDEOS => array(true, true, true, true)
            )
        );

        $manager->flush();
    }

    /**
     * Crée un profile utilisateur à partir des informations fournies
     *
     * @param ObjectManager $manager    Manager d'entités
     * @param string $profileTitle      Nom du profil
     * @param array $permissions        Tableau contenant les permissions
     * @return ProfilePermission
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    private function createProfilePermission($manager, $profileTitle, $permissions)
    {
        $this->loadPermissions($manager);

        // On va charger l'objet "profile" si besoin
        if (!isset($this->profiles[$profileTitle])) {
            $this->profiles[$profileTitle] = $manager->getRepository("LcdpCommonBundle:Profile")->findOneBy(array('title' => $profileTitle));
        }

        $this->createProfilePermissionAllowed($manager, $profileTitle, $permissions);
        $this->createProfilePermissionNotAllowed($manager, $profileTitle, $permissions);

        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getOrder()
    {
        return 3; // l'ordre dans lequel les fichiers sont chargés
    }

    /**
     * Crée un profile utilisateur à partir des informations fournies
     * On va sauvegarder toutes les permissions auxquel le profil à accès
     *
     * @param ObjectManager $manager    Manager d'entités
     * @param string $profileTitle      Nom du profil
     * @param array $permissions        Tableau contenant les permissions
     * @return ProfilePermission
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    private function createProfilePermissionAllowed($manager, $profileTitle, $permissions)
    {
        foreach ($permissions as $permissionTitle => $permission) {
            $profilePermission = new ProfilePermission();
            $profilePermission->setProfile($this->profiles[$profileTitle]);
            $profilePermission->setPermission($this->permissions[$permissionTitle]);
            $profilePermission->setRead($permission[0]);
            $profilePermission->setCreate($permission[1]);
            $profilePermission->setUpdate($permission[2]);
            $profilePermission->setDelete($permission[3]);
            $manager->persist($profilePermission);
        }
    }

    /**
     * Crée un profile utilisateur à partir des informations fournies
     * On va sauvegarder toutes les permissions auxquel le profil à accès
     *
     * @param ObjectManager $manager    Manager d'entités
     * @param string $profileTitle      Nom du profil
     * @param array $permissions        Tableau contenant les permissions
     * @return ProfilePermission
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    private function createProfilePermissionNotAllowed($manager, $profileTitle, $permissions)
    {
        $notAllowedPermissions = array_diff(Permission::getAllPermissions(), array_keys($permissions));

        foreach ($notAllowedPermissions as $notAllowedPermission) {
            $profilePermission = new ProfilePermission();
            $profilePermission->setProfile($this->profiles[$profileTitle]);
            $profilePermission->setPermission($this->permissions[$notAllowedPermission]);
            $profilePermission->setDelete(false);
            $profilePermission->setCreate(false);
            $profilePermission->setUpdate(false);
            $profilePermission->setRead(false);
            $manager->persist($profilePermission);
        }
    }

    /**
     * On va charger les objets "permissions" et les mettres en cache
     *
     * @param ObjectManager $manager
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    private function loadPermissions($manager)
    {
        if (empty($this->permissions)) {
            foreach (Permission::getAllPermissions() as $permissionTitle) {
                $this->permissions[$permissionTitle] = $manager->getRepository("LcdpCommonBundle:Permission")->findOneBy(array('title' => $permissionTitle));
            }
        }

        return $this->permissions;
    }
}
