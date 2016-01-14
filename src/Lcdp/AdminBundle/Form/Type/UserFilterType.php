<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Formulaire de recherche sur le listing des utilisateurs
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class UserFilterType extends AbstractType
{
    /**
     * Construction du formulaire
     *
     * @param FormBuilderInterface $builder Constructeur du formulaire
     * @param array $options                Options du formulaire
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add(
            'firstname',
            'search',
            array(
                'label' => 'Prénom',
                'attr' => array(
                    'class' => 'form-control input-sm'
                )
            )
        );

        $builder->add(
            'lastname',
            'search',
            array(
                'label' => 'Nom',
                'attr' => array(
                    'class' => 'form-control input-sm'
                )
            )
        );
    }

    /**
     * Retourne le nom du formulaire
     *
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getName()
    {
        return 'filters_form';
    }
}
