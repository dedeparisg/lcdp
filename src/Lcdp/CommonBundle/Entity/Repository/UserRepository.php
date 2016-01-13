<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;
use Unapei\Bundle\CoreBundle\Entity\OrganizationalEntity;
use Unapei\Bundle\CoreBundle\Entity\Permission;
use Unapei\Bundle\CoreBundle\Entity\Profile;
use Unapei\Bundle\CoreBundle\Entity\User;

/**
 * Repository des requêtes liées aux utilisateurs
 */
class UserRepository extends EntityRepository
{
    /**
     * Renvoi l'ensemble des permissions d'un utilisateur
     *
     * @param \Lcdp\CommonBundle\Entity\User $user    Utilisateur
     * @param boolean $toArray                               Sous la forme d'un array texte (sinon objets par défaut)
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

                // Cas particulier pour les exports CSV => le droit figure dans la table user
                if ($title == Permission::STATISTIC_CSV) {
                    $return[$title]['READ'] = $user->getExportCsv();
                }
            }
        }

        return $return;
    }

    /**
     * Renvoi l'ensemble des permissions sur les statistiques des graphs pour un utilisateur
     *
     * @param \Lcdp\CommonBundle\Entity\User $user   Utilisateur
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
     * Recherche des utilisateurs en fonctions des critères de recherche
     *
     * @param array   $criteria Critères de recherche
     * @param integer $limit    Nombre maximum de résultats
     * @param integer $offset   Index du premier résultat
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function searchUsers(array $criteria = array(), $limit = null, $offset = null)
    {
        // On construit la requête de base
        $query = $this->getSearchUserQueryBase($criteria, $limit, $offset);

        // On récupère les champs souhaités
        $query->leftJoin('u.profiles', 'p')
            ->leftJoin('u.organizationalEntities', 'oe')
            ->select('u.id, u.firstname, u.locked, u.login, u.lastname, group_concat(DISTINCT p.title) as profileTitle, group_concat(DISTINCT oe.id) as permissionIds')
            ->orderBy('u.lastname', 'ASC')
            ->addOrderBy('u.firstname', 'ASC')
            ->andWhere('oe.deletedAt IS NULL')
            ->groupBy('u.id');

        $return = $query->getQuery()->getArrayResult();

        return $return;
    }

    /**
     * Requête de base pour les utilisateurs
     *
     * @param array   $criteria Critères de recherche
     * @param integer $limit    Nombre maximum de résultats
     * @param integer $offset   Index du premier résultat
     * @return QueryBuilder
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    private function getSearchUserQueryBase(array $criteria = array(), $limit = null, $offset = null)
    {
        $query = $this->createQueryBuilder('u')
            ->where('u.deleted != :true')
            ->andWhere('u.id != :cronId')
            ->setParameter('cronId', User::USER_CRON)
        ;

        // On applique les critères de recherche
        if (isset($criteria['firstname'])) {
            $query->andWhere('u.firstname LIKE :firstName')
                ->setParameter('firstName', '%' . $criteria['firstname'] . '%');
        }
        if (isset($criteria['lastname'])) {
            $query->andWhere('u.lastname LIKE :lastName')
                ->setParameter('lastName', '%' . $criteria['lastname'] . '%');
        }
        if (isset($criteria['masqueDeactivate'])) {
            if ($criteria['masqueDeactivate'] === true) {
                $query->andWhere('u.locked !=:true');
            }
        }

        $query->setParameter('true', true);

        // Pagination
        if (!empty($limit)) {
            $query->setMaxResults($limit);

            // Démarrage ?
            if (!empty($offset)) {
                $query->setFirstResult($offset);
            }
        }

        return $query;
    }

    /**
     * Permet de vérifier l'unicité d'un identifiant de connexion au sein de l'application
     *
     * @param string $login     Identifiant à tester
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
     * Permet de récupere les usitilisateurs ayant le profil "Directeur & Chef de service"
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getDirectors()
    {
        $results = $this->createQueryBuilder('u')
            ->leftJoin('u.profiles', 'p')
            ->where('p.title IN(:profile)')
            ->setParameter('profile', array(Profile::DIRECTOR, Profile::CHIEF))
            ->getQuery()
            ->getResult();

        return $results;
    }

    /**
     * Permet de récupérer tous les utilisateurs qui ont accès à une entité
     *
     * @param OrganizationalEntity $organizationalEntity        L'entité organisationnel concernée
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getUserWithPerimeterAccess(OrganizationalEntity $organizationalEntity)
    {
        $results = $this->createQueryBuilder('u')
            ->leftJoin('u.organizationalEntities', 'oe')
            ->where('oe.id = :entityId')
            ->setParameter('entityId', $organizationalEntity->getId())
            ->getQuery()
            ->getResult();

        return $results;
    }

    public function getUserEstablishmentPerimeter(User $user)
    {
        $qb = $this->createQueryBuilder('u')
            ->select('e.id')
            ->leftJoin('u.organizationalEntities', 'o')
            ->leftJoin('o.establishment', 'e')
            ->where('u.id =:id')
            ->andWhere('o.deletedAt IS NOT NULL')
            ->andWhere('e.draft =:false')
            ->setParameter('id', $user->getId())
            ->setParameter('false', false)
        ;
        return $qb->getQuery()->getArrayResult();
    }
}
