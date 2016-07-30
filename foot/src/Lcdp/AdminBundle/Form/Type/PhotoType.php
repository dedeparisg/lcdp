<?php

namespace Lcdp\AdminBundle\Form\Type;

use Lcdp\CommonBundle\Entity\AlbumVideo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class PhotoType
 *
 * @package Lcdp\AdminBundle\Form
 */
class PhotoType extends AbstractType
{
    /**
     * Cree ou edite une photo pour un groupe donné
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
