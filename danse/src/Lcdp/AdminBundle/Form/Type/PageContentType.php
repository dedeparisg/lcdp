<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class PageContentType
 *
 * @package Lcdp\AdminBundle\Form\Type
 */
class PageContentType extends AbstractType
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
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => 'Lcdp\CommonBundle\Entity\PageContent'
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'page_content';
    }
}
