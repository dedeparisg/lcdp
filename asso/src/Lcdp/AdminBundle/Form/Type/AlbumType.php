<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Webnet\Bundle\SwissArmyBundle\Util\StringUtils;

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
            'startDateYear',
            'choice',
            array(
                'label' => "* Année : ",
                'choices' => StringUtils::getYearsFrom(),
                'empty_value' => '- Sélectionner -'
            )
        );

        $builder->add(
            'startDateMonth',
            'choice',
            array(
                'label' => "Mois : ",
                'choices' => StringUtils::getMonths(),
                'empty_value' => '- Sélectionner -',
                'required' => false
            )
        );

        $builder->add(
            'startDateDay',
            'choice',
            array(
                'label' => "Jour : ",
                'choices' => StringUtils::getDays(),
                'empty_value' => '- Sélectionner -',
                'required' => false,
            )
        );

        $builder->add(
            'endDateYear',
            'choice',
            array(
                'label' => "Année : ",
                'choices' => StringUtils::getYearsFrom(),
                'empty_value' => '- Sélectionner -',
                'required' => false
            )
        );

        $builder->add(
            'endDateMonth',
            'choice',
            array(
                'label' => "Mois : ",
                'choices' => StringUtils::getMonths(),
                'empty_value' => '- Sélectionner -',
                'required' => false
            )
        );

        $builder->add(
            'endDateDay',
            'choice',
            array(
                'label' => "Jour : ",
                'choices' => StringUtils::getDays(),
                'empty_value' => '- Sélectionner -',
                'required' => false
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
