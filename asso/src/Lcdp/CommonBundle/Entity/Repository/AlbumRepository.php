<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Class AlbumRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class AlbumRepository extends EntityRepository
{
    /**
     * Permet de lister tous les albums du site
     *
     * @param array $filters Tableau contenant les filtres
     * @param array $orders  Tableau contenant les tris
     * @param array $limit   Tableau contenant les limites
     *
     * @return array
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($filters = null, $orders = null, $limit = null)
    {
        $query = $this->createQueryBuilder('a')
                ->where('a.isDeleted = 0');

        if (!empty($filters)) {
            if (isset($filters['type']) && !empty($filters['type'])) {
                $query->andWhere('a.type LIKE :type');
                $query->setParameter('type', '%' . $filters['type'] . '%');
            }
            if (isset($filters['title']) && !empty($filters['title'])) {
                $query->andWhere('a.title LIKE :title');
                $query->setParameter('title', '%' . $filters['title'] . '%');
            }
            if (isset($filters['isPublished']) && in_array($filters['isPublished'], array('0', '1'))) {
                $query->andWhere('a.isPublished = :published');
                $query->setParameter('published', $filters['isPublished']);
            }
        }

        if (!empty($orders)) {
            if (isset($orders['publication'])) {
                $query->orderBy('a.publicatedAt', $orders['publication']);
            }
        }

        if (!empty($limit)) {
            if (isset($limit['limit'])) {
                $query->setMaxResults($limit['limit']);
            }
        }

        $return = $query->getQuery()->getArrayResult();

        return $return;
    }
}
