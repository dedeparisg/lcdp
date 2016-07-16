<?php

namespace Lcdp\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class LostPasswordType
 * Demande de réinitialisation de mot de passe
 *
 * @package Lcdp\AdminBundle\Form\Type
 * @author André Tapia <atapia@webnet.fr>
 */
class LostPasswordType extends AbstractType
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
        $builder->add('email', 'email');
    }

    /**
     * Retourne le nom du formulaire
     *
     * @return string
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getBlockPrefix()
    {
        return 'lcdp_lost_password';
    }
}
