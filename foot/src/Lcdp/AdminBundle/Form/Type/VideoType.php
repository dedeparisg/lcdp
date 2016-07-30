<?php

namespace Lcdp\AdminBundle\Form\Type;

use Lcdp\CommonBundle\Entity\AlbumVideo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class VideoType
 *
 * @package Lcdp\AdminBundle\Form
 */
class VideoType extends AbstractType
{
    /**
     * Cree ou edite une video pour un groupe donné
     *
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'albumVideos',
                CollectionType::class,
                array(
                    'type' => new AlbumVideoType(),
                    'by_reference' => true,
                    'allow_add' => true,
                    'allow_delete' => true,
                    'prototype' => true
                )
            );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'video_form';
    }
}
