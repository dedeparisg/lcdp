<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Class EventRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class EventRepository extends EntityRepository
{
    /**
     * Permet de lister tous les événements du site
     *
     * @param array $filters Tableau contenant les filtres
     * @param array $orders  Tableau contenant les tris
     * @param array $limit   Tableau contenant les limites
     * @param bool $returnArray Retourn un tableau ou un objet ?
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($filters = null, $orders = null, $limit = null, $returnArray = true)
    {
        $query = $this->getQueryBase($filters);

        if (!empty($orders)) {
            if (isset($orders['publication'])) {
                $query->orderBy('e.startDate', $orders['publication']);
            }
        } else {
            $query->orderBy('e.startDate', 'ASC');
        }

        if (!empty($limit)) {
            if (isset($limit['limit'])) {
                $query->setMaxResults($limit['limit']);
            }
        }

        if ($returnArray) {
            $return = $query->getQuery()->getArrayResult();
        } else {
            $return = $query->getQuery()->getResult();
        }

        return $return;
    }

    /**
     * Permet de comptabiliser tous les evenements publiés du site
     *
     * @param array $filters Tableau contenant les filtres
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function countEvents($filters = null)
    {
        $query = $this->getQueryBase($filters);
        $query->select('COUNT(e.id)');

        $return = $query->getQuery()->getSingleScalarResult();

        return $return;
    }

    /**
     * Factorisation des requêtes d'evenements
     *
     * @param array $filters Tableau contenant les filtres
     * @return QueryBuilder
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getQueryBase($filters)
    {
        $query = $this->createQueryBuilder('e')
            ->where('e.isDeleted = 0');

        if (!empty($filters)) {
            if (isset($filters['title']) && !empty($filters['title'])) {
                $query->andWhere('e.title LIKE :title');
                $query->setParameter('title', '%' . $filters['title'] . '%');
            }
            if (isset($filters['isPublished']) && in_array($filters['isPublished'], array('0', '1'))) {
                $query->andWhere('e.isPublished = :published');
                $query->setParameter('published', $filters['isPublished']);
            }
            if (isset($filters['future']) && $filters['future'] === true) {
                $query->andWhere('e.startDate >= :now');
                $query->setParameter('now', new \DateTime());
            }
        }

        return $query;
    }

    /**
     * Permet de lister les evenements pour le sitemap
     *
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getItemsForSitemap()
    {
        return $this->createQueryBuilder('e')
            ->where('e.isDeleted = 0')
            ->andWhere('e.isPublished = true')
            ->getQuery()
            ->getResult();
    }
}
