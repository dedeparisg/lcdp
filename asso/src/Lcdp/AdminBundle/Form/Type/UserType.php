<?php

namespace Lcdp\AdminBundle\Form\Type;

use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormError;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Formulaire de création / d'édition d'un utilisateur
 *
 * @author André Tapia <atapia@webnet.fr>
 */
class UserType extends AbstractType
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
            'text',
            array(
                'label' => 'Prénom',
                'attr' => array(
                    'class' => 'login-focus'
                )
            )
        );

        $builder->add(
            'lastname',
            'text',
            array(
                'label' => 'Nom',
                'attr' => array(
                    'class' => 'login-focus'
                )
            )
        );

        $builder->add(
            'locked',
            'choice',
            array(
                'disabled' => ($options['userPermissions']['USER_PROFILE']['READ']) ? false : true,
                'label' => 'Compte vérouillé',
                'choices' => array('1' => 'Oui', '0' => 'Non'),
                'expanded' => true,
                'attr' => array(
                    'class' => 'radio_list'
                )
            )
        );

        $builder
            ->add(
                'email',
                'repeated',
                array(
                    'label' => 'Email',
                    'type' => 'email',
                    'invalid_message' => 'Les emails ne correspondent pas.',
                    'required' => true,
                    'first_options'  => array('label' => 'Email'),
                    'second_options' => array('label' => "Confirmation de l'email")
                )
            );

        $builder
            ->add(
                'login',
                'text',
                array(
                    'label' => 'Identifiant de connexion',
                    'required' => false,
                    'disabled' => true
                )
            );

        $builder
            ->add(
                'cannonicalPassword',
                'repeated',
                array(
                    'type' => 'password',
                    'invalid_message' => 'Les mots de passe ne correspondent pas.',
                    'first_options'  => array('label' => 'Mot de passe'),
                    'second_options' => array('label' => 'Confirmation du mot de passe'),
                    'required' => false,
                    'attr' => array('class' => 'fuck')
                )
            );

        $builder
            ->add(
                'profiles',
                'entity',
                array(
                    'disabled' => ($options['userPermissions']['USER_PROFILE']['READ']) ? false : true,
                    'class' => 'LcdpCommonBundle:Profile',
                    'label' => "Profile",
                    'property' => 'title',
                    'multiple' => true,
                    'expanded' => true,
                    'query_builder' => function (EntityRepository $er) {
                        return $er->createQueryBuilder('p')
                            ->orderBy('p.id', 'ASC');
                    }
                )
            );

        /**
         * Permet de s'assurer que le champ "valeur" respecte les conditions
         */
        $builder->addEventListener(FormEvents::POST_SUBMIT, function (FormEvent $event) {
            $form = $event->getForm();
            $profiles = $form->get('profiles');

            if (count($profiles->getData()) == 0) {
                $profiles->addError(new FormError("Merci de renseigner ce champ."));
            }
        });
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => 'Lcdp\CommonBundle\Entity\User',
                'validation_groups' => array(),
                'userPermissions' => array(),
                'isNew' => null
            )
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'lcdp_user';
    }
}
