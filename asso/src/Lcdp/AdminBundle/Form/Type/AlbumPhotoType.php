<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class AlbumType
 *
 * @package Lcdp\AdminBundle\Form
 */
class PhotoType extends AbstractType
{
    /**
     * Cree ou edite un intitulé de poste
     *
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'imgFiles',
                'file',
                array(
                    'multiple' => true,
                    'label' => 'Photos : ',
                    'required' => false,
                )
            );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'photo_form';
    }
}
