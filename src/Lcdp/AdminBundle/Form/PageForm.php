<?php

namespace Lcdp\AdminBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
  * @author André Tapia <contact@andretapia.com>
 */
class PageForm extends AbstractType
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
                'label' => "* Contenu : "
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
                'sections' => null
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'page_form';
    }
}
