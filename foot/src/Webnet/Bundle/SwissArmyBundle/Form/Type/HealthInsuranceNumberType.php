<?php

namespace Webnet\Bundle\SwissArmyBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Webnet\Bundle\SwissArmyBundle\Form\DataTransformer\HealthInsuranceNumberTransformer;

class HealthInsuranceNumberType extends AbstractType
{
    /**
     * Utiliser le format français ou un format générique ?
     *
     * @var boolean
     */
    private $useFrenchControls;

    /**
     * Constructeur du formulaire
     *
     * @param boolean $useFrenchControls Utilisation du mode de saisie français ?
     */
    public function __construct($useFrenchControls)
    {
        $this->useFrenchControls = $useFrenchControls;
    }

    /**
     * @inherit
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if ($this->useFrenchControls) {
            $builder
                ->add(
                    'sex',
                    'text',
                    array(
                        'label' => false,
                        'max_length' => 1,
                        'required' => false
                    )
                )
                ->add(
                    'birthYear',
                    'text',
                    array(
                        'label' => false,
                        'max_length' => 2,
                        'required' => false
                    )
                )
                ->add(
                    'birthMonth',
                    'text',
                    array(
                        'label' => false,
                        'max_length' => 2,
                        'required' => false
                    )
                )
                ->add(
                    'birthState',
                    'text',
                    array(
                        'label' => false,
                        'max_length' => 2,
                        'required' => false
                    )
                )
                ->add(
                    'birthStateId',
                    'text',
                    array(
                        'label' => false,
                        'max_length' => 3,
                        'required' => false
                    )
                )
                ->add(
                    'birthOrder',
                    'text',
                    array(
                        'label' => false,
                        'max_length' => 3,
                        'required' => false
                    )
                )
                ->add(
                    'key',
                    'text',
                    array(
                        'label' => false,
                        'max_length' => 3,
                        'required' => false
                    )
                )
                ->addModelTransformer(new HealthInsuranceNumberTransformer());
        }
    }

    /**
     * @inherit
     */
    public function finishView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['composite'] = $this->useFrenchControls;
    }

    /**
     * @inherit
     */
    public function getParent()
    {
        return $this->useFrenchControls ? 'form': 'text';
    }

    /**
     * @inherit
     */
    public function getName()
    {
        return 'health_insurance_number';
    }
}
