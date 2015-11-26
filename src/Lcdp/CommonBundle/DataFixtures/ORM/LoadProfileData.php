<?php

namespace Lcdp\CommonBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Lcdp\CommonBundle\Entity\Profile;

/**
 * Chargement des profiles de l'application
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class LoadProfileData implements FixtureInterface, OrderedFixtureInterface
{

    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $this->createProfile($manager, Profile::ADMIN);
        $this->createProfile($manager, Profile::AUTHOR);
        $manager->flush();
    }

    /**
     * Crée un profile utilisateur à partir des informations fournies
     *
     * @param $manager   Manager d'entités
     * @param $title     Nom du profil
     *
     * @return RefProfile
     */
    private function createProfile($manager, $title)
    {
        $profile = new Profile();
        $profile->setTitle($title);

        $manager->persist($profile);
        return $profile;
    }

    /**
     * {@inheritDoc}
     */
    public function getOrder()
    {
        return 1; // l'ordre dans lequel les fichiers sont chargés
    }
}
