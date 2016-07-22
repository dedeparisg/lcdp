<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;
use Lcdp\CommonBundle\Entity\Permission;
use Lcdp\CommonBundle\Entity\User;

/**
 * Class UserRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class UserRepository extends EntityRepository
{
    /**
     * Renvoi l'ensemble des permissions d'un utilisateur
     *
     * @param \Lcdp\CommonBundle\Entity\User $user    Utilisateur
     * @param boolean                        $toArray Sous la forme d'un array texte (sinon objets par défaut)
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getUserPermissions(User $user, $toArray = false)
    {
        $allPermissions = array();

        // On va récupérer les permissions pour chacun des profiles de l'utilisateur
        foreach ($user->getProfiles() as $profile) {
            $profiles = array();

            foreach ($profile->getPermissions()->toArray() as $profilePermission) {
                $profiles[$profilePermission->getPermission()->getId()] = $profilePermission;
            }
            $allPermissions[] = $profiles;
        }

        if (!$toArray) {
            return $allPermissions;
        }

        // On met en forme les permissions sous forme de tableau
        $return = array();
        foreach ($allPermissions as $permissions) {
            foreach ($permissions as $permission) {
                $title = $permission->getPermission()->getTitle();

                if (!isset($return[$title])) {
                    $return[$title] = array(
                        'READ' => $permission->getRead(),
                        'CREATE' => $permission->getCreate(),
                        'UPDATE' => $permission->getUpdate(),
                        'DELETE' => $permission->getDelete()
                    );
                } else {

                    $return[$title]['READ'] = ($return[$title]['READ'] || $permission->getRead());
                    $return[$title]['CREATE'] = ($return[$title]['CREATE'] || $permission->getCreate());
                    $return[$title]['UPDATE'] = ($return[$title]['UPDATE'] || $permission->getUpdate());
                    $return[$title]['DELETE'] = ($return[$title]['DELETE'] || $permission->getDelete());
                }
            }
        }

        return $return;
    }

    /**
     * Renvoi l'ensemble des permissions sur les statistiques des graphs pour un utilisateur
     *
     * @param \Lcdp\CommonBundle\Entity\User $user Utilisateur
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getUserStatisticGraphPermissions(User $user)
    {
        $allPermissions = array();

        // On va récupere les permissions pour chacun des profiles de l'utilisateur
        foreach ($user->getGraphPermissions() as $graphPermission) {
            $parent = $graphPermission->getParent();
            $allPermissions[$parent->getCode()][$parent->getCode()] = true;
            $allPermissions[$parent->getCode()][$graphPermission->getCode()] = true;
        }

        return $allPermissions;
    }

    /**
     * Compte le nombre d'utilisateurs en fonction des critères de recherche
     *
     * @param array $criteria Critères de recherche
     * @return integer
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function countUsers(array $criteria = array())
    {
        // On construit la requête de base
        $query = $this->getSearchUserQueryBase($criteria);
        $query->select('COUNT(u.id)');

        $return = $query->getQuery()->getSingleScalarResult();

        return $return;
    }

    /**
     * Compte le nombre d'utilisateurs pour le recap que seul un admin observeur peut voir
     *
     * @return integer
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function countUsersForAdmin()
    {
        // On construit la requête de base
        $count = $this->createQueryBuilder('u')
            ->select('COUNT(DISTINCT u.id)')
            ->innerJoin('u.profiles', 'p')
            ->innerJoin('u.organizationalEntities', 'oe')
            ->where('u.deleted = :false')
            ->setParameter('false', false)
            ->getQuery()
            ->getSingleScalarResult();

        return $count;
    }

    /**
     * Permet de vérifier l'unicité d'un identifiant de connexion au sein de l'application
     *
     * @param string $login Identifiant à tester
     * @return boolean
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function verifyLoginUnicity($login)
    {
        $results = $this->createQueryBuilder('u')
            ->where('u.login = :login')
            ->setParameter('login', $login)
            ->select('COUNT(u.id)')
            ->getQuery()
            ->getSingleScalarResult();

        $isUnique = ($results == 0) ? true : false;

        return $isUnique;
    }

    /**
     * Permet de lister tous les utilisateurs du site
     *
     * @param array $criteria Tableau contenant les filtres
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($criteria)
    {
        $query = $this->createQueryBuilder('u')
            ->where('u.deleted != :true')
            ->leftJoin('u.profiles', 'p')
            ->select('u.id, u.firstname, u.locked, u.login, u.lastname, group_concat(DISTINCT p.title) as profileTitle')
            ->andWhere('u.id != :cronId')
            ->orderBy('u.lastname', 'ASC')
            ->addOrderBy('u.firstname', 'ASC')
            ->groupBy('u.id')
            ->setParameter('true', true)
            ->setParameter('cronId', User::USER_CRON);

        // On applique les critères de recherche
        if (isset($criteria['firstname'])) {
            $query->andWhere('u.firstname LIKE :firstName')
                ->setParameter('firstName', '%' . $criteria['firstname'] . '%');
        }
        if (isset($criteria['lastname'])) {
            $query->andWhere('u.lastname LIKE :lastName')
                ->setParameter('lastName', '%' . $criteria['lastname'] . '%');
        }

        $return = $query->getQuery()->getArrayResult();

        return $return;
    }
}
