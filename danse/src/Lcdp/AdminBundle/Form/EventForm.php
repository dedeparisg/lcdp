<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class EventForm extends AbstractType
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
            'content',
            'textarea',
            array(
                'label' => "* Contenu : ",
                'attr' => array('class' => 'tinymce','data-theme' => 'advanced')
            )
        );

        $builder->add(
            'startDate',
            null,
            array(
                'label' => "* Date de début : ",
                'attr' => array('class' => 'datepicker'),
                'widget' => 'single_text'
            )
        );

        $builder->add(
            'endDate',
            null,
            array(
                'label' => "Date de fin : ",
                'attr' => array('class' => 'datepicker'),
                'widget' => 'single_text'
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
        return 'news_form';
    }
}
