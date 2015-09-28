<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class FiltersForm extends AbstractType
{

    public function __construct()
    {
    }

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
                'label' => "Intitulé : ",
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-2'),
            )
        );

        $builder->add(
            'section',
            'choice',
            array(
                'label' => "Section : ",
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-2'),
                'choices' => $options['sections'],
                'expanded' => false,
                'multiple' => true
            )
        );

        $builder->add(
            'isPublished',
            'choice',
            array(
                'label' => "Status : ",
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-2'),
                'choices' => array('1' => 'Publié', '0' => 'Non publié'),
                'empty_value' => '- Sélectionner -'
            )
        );

        $builder->add(
            'canBeDeleted',
            'choice',
            array(
                'label' => "Peut être suppimé : ",
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-2'),
                'choices' => array('1' => 'oui', '0' => 'non'),
                'empty_value' => '- Sélectionner -'
            )
        );
    }

public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array('sections' => null));
    }

    public function getName()
    {
        return 'filters_form';
    }
}