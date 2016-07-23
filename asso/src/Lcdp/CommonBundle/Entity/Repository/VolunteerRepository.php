<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;

/**
 * Class VolunteerRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class VolunteerRepository extends EntityRepository
{
    /**
     * Permet de lister toutes les pages éditable du site
     *
     * @param array        $filters Tableau contenant les filtres
     * @param array        $orders  Tableau contenant les tris
     * @param integer|null $limit   Pagination
     * @param integer|null $offset  Page de démarage
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($filters = null, $orders = null, $limit = null, $offset = null)
    {
        $query = $this->getQueryBase($filters);

        if (!empty($orders)) {
            if (isset($orders['publication'])) {
                $query->orderBy('v.publicatedAt', $orders['publication']);
            }
        }

        if (!empty($limit)) {
            $query->setMaxResults($limit);

            // Démarrage ?
            if (!empty($offset)) {
                $query->setFirstResult($offset);
            }
        }

        $return = $query->getQuery()->getArrayResult();

        return $return;
    }

    /**
     * Permet de comptabiliser toutes les actualitées publiées du site
     *
     * @param array $filters Tableau contenant les filtres
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function countNews($filters = null)
    {
        $query = $this->getQueryBase($filters);
        $query->select('COUNT(v.id)');

        $return = $query->getQuery()->getSingleScalarResult();

        return $return;
    }

    /**
     * Factorisation des requêtes d'actualité
     *
     * @param array $filters Tableau contenant les filtres
     * @return QueryBuilder
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getQueryBase($filters)
    {
        $query = $this->createQueryBuilder('v')
            ->where('v.isDeleted = 0');

        if (!empty($filters)) {
            if (isset($filters['title']) && !empty($filters['title'])) {
                $query->andWhere('v.title LIKE :title');
                $query->setParameter('title', '%' . $filters['title'] . '%');
            }
            if (isset($filters['isPublished']) && in_array($filters['isPublished'], array('0', '1'))) {
                $query->andWhere('v.isPublished = :published');
                $query->setParameter('published', $filters['isPublished']);
            }
        }

        return $query;
    }
}
