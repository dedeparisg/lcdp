<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class MemberFiltersForm extends AbstractType
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
            'name',
            'text',
            array(
                'label' => "Nom ou prénom : ",
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-2'),
            )
        );

        $builder->add(
            'licenceNum',
            'text',
            array(
                'label' => "Numéro de licence : ",
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-2'),
            )
        );

        $builder->add(
            'section',
            'choice',
            array(
                'label' => "Section : ",
                'choices' => $options['sections'],
                'expanded' => false,
                'multiple' => true,
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-1'),
            )
        );

        $builder->add(
            'category',
            'choice',
            array(
                'label' => "Categorie : ",
                'choices' => $options['categories'],
                'expanded' => false,
                'multiple' => true,
                'label_attr' => array('class' => 'col-lg-1 control-label'),
                'attr' => array('class' => 'col-lg-1'),
            )
        );
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(
            array(
                'sections' => null,
                'categories' => null
            )
        );
    }

    public function getName()
    {
        return 'member_filters_form';
    }
}