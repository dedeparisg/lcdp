<?php

namespace Webnet\Bundle\SwissArmyBundle\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;

/**
 * Transformeur de données pour le champ de saisie d'un numéro de sécurité sociale
 */
class HealthInsuranceNumberTransformer implements DataTransformerInterface
{
    /**
     * @inherit
     */
    public function transform($healthInsuranceNumber)
    {
        return array(
            'sex' => substr($healthInsuranceNumber, 0, 1),
            'birthYear' => substr($healthInsuranceNumber, 1, 2),
            'birthMonth' => substr($healthInsuranceNumber, 3, 2),
            'birthState' => substr($healthInsuranceNumber, 5, 2),
            'birthStateId' => substr($healthInsuranceNumber, 7, 3),
            'birthOrder' => substr($healthInsuranceNumber, 10, 3),
            'key' => substr($healthInsuranceNumber, 13, 2)
        );
    }

    /**
     * @inherit
     */
    public function reverseTransform($value)
    {
        return $value['sex'] .
               $value['birthYear'] .
               $value['birthMonth'] .
               $value['birthState'] .
               $value['birthStateId'] .
               $value['birthOrder'] .
               $value['key'];
    }
}
