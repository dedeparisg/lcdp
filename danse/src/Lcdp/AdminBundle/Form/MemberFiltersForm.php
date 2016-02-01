<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class MemberFiltersForm extends AbstractType
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
            'name',
            'text',
            array(
                'label' => "Nom ou prénom : ",
            )
        );

        $builder->add(
            'licenceNum',
            'text',
            array(
                'label' => "Numéro de licence : ",
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
                'categories' => null
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'member_filters_form';
    }
}
