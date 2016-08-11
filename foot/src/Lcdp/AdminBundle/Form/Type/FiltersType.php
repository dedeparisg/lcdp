<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Webnet\Bundle\SwissArmyBundle\Util\StringUtils;

/**
 * Class FiltersType
 *
 * @package Lcdp\AdminBundle\Form
 */
class FiltersType extends AbstractType
{
    /**
     * Cree ou edite un intitulé de poste
     *
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($options['title'] === true) {
            $builder->add(
                'title',
                null,
                array(
                    'label' => "Intitulé : "
                )
            );
        }

        if ($options['isPublished'] === true) {
            $builder->add(
                'isPublished',
                'choice',
                array(
                    'label' => "Status : ",
                    'choices' => array('1' => 'Publié', '0' => 'Non publié'),
                    'empty_value' => '- Sélectionner -'
                )
            );
        }

        if ($options['year'] === true) {
            $builder->add(
                'year',
                'choice',
                array(
                    'label' => "Année : ",
                    'choices' => StringUtils::getYearsFrom(),
                    'empty_value' => '- Sélectionner -'
                )
            );
        }
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
                'title' => true,
                'isPublished' => true,
                'year' => false
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'filters_form';
    }
}
