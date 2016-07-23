<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class VolunteerType
 *
 * @package Lcdp\AdminBundle\Form
 */
class VolunteerType extends AbstractType
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
            'content',
            null,
            array(
                'label' => "* Contenu : ",
                'attr' => array(
                    'class' => 'tinymce',
                    'data-theme' => 'advanced'
                )
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'volunteer_form';
    }
}
