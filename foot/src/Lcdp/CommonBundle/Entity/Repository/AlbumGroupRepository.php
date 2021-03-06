<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Class AlbumGroupRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class AlbumGroupRepository extends EntityRepository
{
    /**
     * Permet de lister tous les albums du site
     *
     * @param array $filters Tableau contenant les filtres
     *
     * @return array
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($filters = null)
    {
        $query = $this->getQueryBase($filters);

        $return = $query->getQuery()->getArrayResult();

        return $return;
    }

    /**
     * Permet de comptabiliser tous les albums publiés du site
     *
     * @param array $filters Tableau contenant les filtres
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function countEvents($filters = null)
    {
        $query = $this->getQueryBase($filters);
        $query->select('COUNT(a.id)');

        $return = $query->getQuery()->getSingleScalarResult();

        return $return;
    }

    /**
     * Factorisation des requêtes d'albums
     *
     * @param array $filters Tableau contenant les filtres
     * @return QueryBuilder
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getQueryBase(array $filters = array())
    {
        $query = $this->createQueryBuilder('a')
            ->where('a.isDeleted = :false')
            ->setParameter('false', false);

        if (!empty($filters)) {
            if (isset($filters['title']) && !empty($filters['title'])) {
                $query->andWhere('a.title LIKE :title');
                $query->setParameter('title', '%' . $filters['title'] . '%');
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
        return $this->createQueryBuilder('ag')
            ->innerJoin('ag.album', 'a')
            ->where('ag.isDeleted = false')
            ->andWhere('a.isDeleted = false')
            ->andWhere('a.isPublished = true')
            ->getQuery()
            ->getResult();
    }
}
