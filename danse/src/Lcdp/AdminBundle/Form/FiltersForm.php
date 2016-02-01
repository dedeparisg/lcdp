<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class FiltersForm extends AbstractType
{

    /**
     * Cree ou edite un intitulé de poste
     *
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add(
            'title',
            null,
            array(
                'label' => "Intitulé : "
            )
        );

        $builder->add(
            'isPublished',
            'choice',
            array(
                'label' => "Status : ",
                'choices' => array('1' => 'Publié', '0' => 'Non publié'),
                'empty_value' => '- Sélectionner -'
            )
        );

        $builder->add(
            'canBeDeleted',
            'choice',
            array(
                'label' => "Peut être suppimé : ",
                'choices' => array('1' => 'oui', '0' => 'non'),
                'empty_value' => '- Sélectionner -'
            )
        );
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array()
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
