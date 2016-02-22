<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * @author André Tapia <contact@andretapia.com>
 */
class PageType extends AbstractType
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

        $builder
            ->add(
                'pageContents',
                'collection',
                array(
                    'type' => new PageContentType(),
                    'allow_add' => true,
                    'allow_delete' => true,
                    'prototype' => true
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
                'data_class' => 'Lcdp\CommonBundle\Entity\Page'
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'page';
    }
}
