<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\QueryBuilder;

/**
 * Class NewsRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class NewsRepository extends EntityRepository
{
    /**
     * Permet de lister toutes les pages éditable du site
     *
     * @param array        $filters     Tableau contenant les filtres
     * @param array        $orders      Tableau contenant les tris
     * @param integer|null $limit       Pagination
     * @param integer|null $offset      Page de démarage
     * @param bool         $returnArray Renvoi un tableau ou un objet ?
     * @return array
     *
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($filters = null, $orders = null, $limit = null, $offset = null, $returnArray = true)
    {
        $query = $this->getQueryBase($filters);

        if (!empty($orders)) {
            if (isset($orders['publication'])) {
                $query->orderBy('n.publicatedAt', $orders['publication']);
            }
        }

        if (!empty($limit)) {
            $query->setMaxResults($limit);

            // Démarrage ?
            if (!empty($offset)) {
                $query->setFirstResult($offset);
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
        $query->select('COUNT(n.id)');

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
        $query = $this->createQueryBuilder('n')
            ->where('n.isDeleted = 0');

        if (!empty($filters)) {
            if (isset($filters['title']) && !empty($filters['title'])) {
                $query->andWhere('n.title LIKE :title');
                $query->setParameter('title', '%' . $filters['title'] . '%');
            }
            if (isset($filters['isPublished']) && in_array($filters['isPublished'], array('0', '1'))) {
                $query->andWhere('n.isPublished = :published');
                $query->setParameter('published', $filters['isPublished']);
            }
            if (isset($filters['futur'])) {
                $query->andWhere('n.isPublished = :published');
                $query->setParameter('published', $filters['isPublished']);
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
        return $this->createQueryBuilder('n')
            ->where('n.isDeleted = false')
            ->andWhere('n.isPublished = true')
            ->getQuery()
            ->getResult();
    }
}
