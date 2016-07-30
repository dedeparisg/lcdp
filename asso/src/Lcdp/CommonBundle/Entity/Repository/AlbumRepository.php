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
     * Permet de lister les années de tous les albums du site
     *
     * @param array $filters Tableau contenant les filtres
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getListByYear($filters = null)
    {
        $return = array();

        $query = $this->getQueryBase($filters);
        $query->select('a.id, a.startDate');
        $query->orderBy('a.startDate', 'DESC');

        $albums = $query->getQuery()->getArrayResult();

        // On initialise les tableaux de retours
        foreach ($albums as $album) {
            $year = $album['startDate']->format('Y');
            $return[$year] = $year;
        }

        return $return;
    }

    /**
     * Permet de lister tous les albums du site
     *
     * @param array $filters Tableau contenant les filtres
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($filters = null)
    {
        $query = $this->getQueryBase($filters);
        $query->orderBy('a.title', 'ASC');
        $return = $query->getQuery()->getArrayResult();

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
    public function getQueryBase($filters)
    {
        $query = $this->createQueryBuilder('a')
            ->where('a.isDeleted = 0');

        if (!empty($filters)) {
            if (isset($filters['isPublished']) && in_array($filters['isPublished'], array('0', '1'))) {
                $query->andWhere('a.isPublished = :published');
                $query->setParameter('published', $filters['isPublished']);
            }
            if (isset($filters['year'])) {
                $query->andWhere('a.startDate LIKE :startDate');
                $query->setParameter('startDate', $filters['year'] . '%');
            }
        }

        return $query;
    }
}
