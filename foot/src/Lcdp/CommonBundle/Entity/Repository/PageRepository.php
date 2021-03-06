<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Class PageRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class PageRepository extends EntityRepository
{
    /**
     * Permet de lister toutes les pages éditable du site
     *
     * @param array $filters Tableau contenant les filtres
     * @return array
     * @author André Tapia <contact@andretapia.com>
     */
    public function getList($filters = array(), $order = array())
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.isDeleted = 0')
            ->orderBy('p.position');

        if (!empty($filters)) {
            if (isset($filters['title']) && !empty($filters['title'])) {
                $query->andWhere('p.title LIKE :title');
                $query->setParameter('title', '%' . $filters['title'] . '%');
            }
            if (isset($filters['slug']) && !empty($filters['slug'])) {
                $query->andWhere('p.slug LIKE :slug');
                $query->setParameter('slug', '%' . $filters['slug'] . '%');
            }
            if (isset($filters['isPublished']) && in_array($filters['isPublished'], array('0', '1'))) {
                $query->andWhere('p.isPublished = :published');
                $query->setParameter('published', $filters['isPublished']);
            }
        }

        if (!empty($order)) {
            foreach ($order as $item => $pos) {
                $query->addOrderBy('p.' . $item, $pos);
            }
        }

        $return = $query->getQuery()->getArrayResult();

        return $return;
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
        return $this->createQueryBuilder('p')
            ->where('p.isDeleted = false')
            ->andWhere('p.isPublished = true')
            ->getQuery()
            ->getResult();
    }
}
