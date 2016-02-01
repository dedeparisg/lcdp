<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * PageRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
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
    public function getList($filters)
    {
        $query = $this->createQueryBuilder('p')
                ->where('p.isDeleted = 0');

        if (!empty($filters)) {

            if (isset($filters['title']) && !empty($filters['title'])) {
                $query->andWhere('p.title LIKE :title');
                $query->setParameter('title', '%' . $filters['title'] . '%');
            }
            if (isset($filters['is_published']) && in_array($filters['is_published'], array('0', '1'))) {
                $query->andWhere('p.isPublished = :published');
                $query->setParameter('published', $filters['is_published']);
            }
            if (isset($filters['can_be_deleted']) && in_array($filters['can_be_deleted'], array('0', '1'))) {
                $query->andWhere('p.canBeDeleted = :canBeDeleted');
                $query->setParameter('canBeDeleted', $filters['can_be_deleted']);
            }
        }

        $return = $query->getQuery()->getArrayResult();

        return $return;
    }
}
