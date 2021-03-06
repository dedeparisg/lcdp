<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Class MemberRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class MemberRepository extends EntityRepository
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
        $query = $this->createQueryBuilder('m')
                ->where('m.isDeleted = 0');

        if (!empty($filters)) {
            if (isset($filters['name']) && !empty($filters['name'])) {
                $query->andWhere('m.lastName LIKE :name OR m.firstName LIKE :name');
                $query->setParameter('name', '%' . $filters['name'] . '%');
            }
            if (isset($filters['licenceNum']) && !empty($filters['licenceNum'])) {
                $query->andWhere('m.licenceNum LIKE :licenceNum');
                $query->setParameter('licenceNum', '%' . $filters['licenceNum'] . '%');
            }
            if (isset($filters['category']) && !empty($filters['category'])) {
                $query->andWhere('m.category IN (:category)');
                $query->setParameter('category', $filters['category']);
            }
        }

        $return = $query->getQuery()->getArrayResult();

        return $return;
    }
}
