<?php

namespace Lcdp\AdminBundle\Form\Type;

use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class AlbumType
 *
 * @package Lcdp\AdminBundle\Form
 */
class AlbumType extends AbstractType
{
    /**
     * Cree ou edite un intitulé de poste
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
                'label' => "* Titre : ",
                'attr' => array('maxlength' => 255),
            )
        );

        $builder->add(
            'intro',
            null,
            array(
                'label' => "Introduction : ",
                'required' => false,
            )
        );

        $builder->add(
            'startDate',
            null,
            array(
                'label' => "* Date de début : ",
                'attr' => array('class' => 'datepicker'),
                'format' => 'dd/MM/yyyy',
                'widget' => 'single_text'
            )
        );

        $builder->add(
            'endDate',
            null,
            array(
                'label' => " Date de fin : ",
                'attr' => array('class' => 'datepicker'),
                'format' => 'dd/MM/yyyy',
                'widget' => 'single_text'
            )
        );

        $builder
            ->add(
                'albumGroups',
                'collection',
                array(
                    'type' => new AlbumGroupType(),
                    'allow_add' => true,
                    'allow_delete' => true,
                    'prototype' => true,
                    'by_reference' => true,
                )
            );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'album_form';
    }
}
