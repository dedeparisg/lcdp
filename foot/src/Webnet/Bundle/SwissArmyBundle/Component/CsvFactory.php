<?php

namespace Webnet\Bundle\SwissArmyBundle\Component;

/**
 * Factory gérant le format CSV
 *
 * @author Antoine Pacaud <apacaud@webnet.fr>
 */
class CsvFactory
{
    public static function getExporter($outCharset = 'Windows-1252', $delimiter = ';')
    {
        return new CsvExporter($outCharset, $delimiter);
    }
}
