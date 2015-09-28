<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class EventForm extends AbstractType
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
                'label' => "* Titre : ",
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
            'intro',
            null,
            array(
                'label' => "Introduction : ",
                'required' => false,
            )
        );

        $builder->add(
            'content',
            null,
            array(
                'label' => "* Contenu : ",
                'attr' => array('class' => 'wysiwyg')
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

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array('sections' => null));
    }

    public function getName()
    {
        return 'news_form';
    }
}