<?php

namespace Lcdp\FrontBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class ContactForm extends AbstractType
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
                'label' => "* Votre nom : ",
                'required' => true,
                'attr' => array('maxlength' => 256),
            )
        );

        $builder->add(
            'email',
            'text',
            array(
                'label' => "* Votre email : ",
                'attr' => array('maxlength' => 256),
            )
        );

        $builder->add(
            'message',
            'textarea',
            array(
                'label' => "* Votre message : ",
                'required' => true
            )
        );
    }

    public function getName()
    {
        return 'contact_form';
    }
}