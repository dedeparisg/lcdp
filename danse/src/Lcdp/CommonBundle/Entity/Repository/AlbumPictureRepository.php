<?php

namespace Lcdp\CommonBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Class AlbumGroupRepository
 *
 * @package Lcdp\CommonBundle\Entity\Repository
 */
class AlbumPictureRepository extends EntityRepository
{
    /**
     * Permet de récupere les images d'un album ordonnée par priorité
     *
     * @param integer $albumGroupId
     * @return array
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getAllByAlbum($albumGroupId)
    {
        $query = $this->createQueryBuilder('p')
            ->innerjoin('p.albumGroup', 'a')
            ->andWhere('a.id = :albumGroupid')
            ->setParameter('albumGroupid', $albumGroupId)
            ->orderBy('p.priority');

        $return = $query->getQuery()->getResult();

        return $return;
    }
}
