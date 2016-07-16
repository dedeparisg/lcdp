<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class AlbumVideoType
 *
 * @package Lcdp\AdminBundle\Form\Type
 */
class AlbumVideoType extends AbstractType
{
    /**
     * Cree ou edite une vidéo d'un album
     *
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add(
            'title',
            null,
            array(
                'label' => "Titre : ",
                'attr' => array('maxlength' => 255),
            )
        );

        $builder->add(
            'url',
            null,
            array(
                'label' => "URL (iframe): ",
                'attr' => array('maxlength' => 255),
            )
        );

        $builder->add(
            'content',
            null,
            array(
                'label' => "Contenu : ",
                'attr' => array(
                    'class' => 'tinymce',
                    'data-theme' => 'advanced'
                )
            )
        );
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => 'Lcdp\CommonBundle\Entity\AlbumVideo'
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'album_video';
    }
}
