<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class MemberForm extends AbstractType
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
            'lastName',
            null,
            array(
                'label' => "* Nom : ",
                'attr' => array('maxlength' => 255),
            )
        );

        $builder->add(
            'firstName',
            null,
            array(
                'label' => "* Prénom : ",
                'attr' => array('maxlength' => 255),
            )
        );

        $builder->add(
            'birthday',
            null,
            array(
                'label' => "* Date de naissance : ",
                'attr' => array('class' => 'datepicker'),
                'widget' => 'single_text'
            )
        );

        $builder->add(
            'licenceNum',
            null,
            array(
                'label' => "* Numéro de license : ",
                'attr' => array('maxlength' => 255),
            )
        );

        $builder->add(
            'section',
            'choice',
            array(
                'choices' => $options['sections'],
                'label' => "* Section : ",
                'mapped' => false,
                'empty_value' => '- Sélectionner -'
            )
        );

        $builder->add(
            'category',
            'choice',
            array(
                'choices' => $options['categories'],
                'label' => "Catégorie : ",
                'mapped' => false,
                'empty_value' => '- Sélectionner -',
                'required' => false
            )
        );

        $builder->add(
            'email',
            null,
            array(
                'label' => "* Email : ",
                'attr' => array('maxlength' => 255),
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
        return 'member_form';
    }
}