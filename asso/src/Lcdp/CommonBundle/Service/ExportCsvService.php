<?php

namespace Lcdp\CommonBundle\Service;

use Symfony\Component\HttpFoundation\Response;

/**
 * Class ExportCsvServices
 *
 * @package Unapei\CoreBundle\Services
 * @author André Tapia <atapia@webnet.fr>
 *
 * Génération d'un export CSV
 *
 * Les valeurs par défaut sont les suivantes :
 * - jeu de caractères en entrée "UTF-8"
 * - jeu de caractères en sortie "Windows-1252"
 * - délimiteur ";"
 */
class ExportCsvService
{
    /**
     * Jeu de caractères d'entrée
     *
     * @var string
     */
    private $inCharset = 'UTF-8';

    /**
     * Jeu de caractères de sortie
     *
     * @var string
     */
    private $outCharset = 'Windows-1252';

    /**
     * @var string
     */
    private $delimiter = ';';

    /**
     * @var string
     */
    private $extension = 'csv';

    /**
     * @var resource
     */
    private $content;

    /**
     * Constructeur de la classe
     */
    public function __construct()
    {
        $this->content = fopen('php://temp', 'r+');
    }

    /**
     * Ajouter plusieurs de valeurs à l'export
     *
     * @param array $data
     */
    public function addLines(array $data)
    {
        foreach ($data as $line) {
            $this->addLine($line);
        }
    }

    /**
     * Ajouter une ligne de valeurs à l'export
     *
     * @param array $data
     */
    public function addLine(array $data)
    {
        $inCharset = $this->inCharset;
        $outCharset = $this->outCharset;

        if ($outCharset !== null) {
            array_walk(
                $data,
                function (&$value, $key) use ($inCharset, $outCharset) {
                    $value = iconv($inCharset, $outCharset, $value);
                }
            );
        }

        fputcsv($this->content, $data, $this->delimiter);
    }

    /**
     * Get Content
     *
     * @return string
     */
    public function getContent()
    {
        return stream_get_contents($this->content, -1, 0);
    }

    /**
     * Set Delimiter
     *
     * @param string $delimiter     Délimiteur
     */
    public function setDelimiter($delimiter)
    {
        $this->delimiter = $delimiter;
    }

    /**
     * Get Delimiter
     *
     * @return string
     */
    public function getDelimiter()
    {
        return $this->delimiter;
    }

    /**
     * Set InCharset
     *
     * @param string $inCharset
     */
    public function setInCharset($inCharset)
    {
        $this->inCharset = $inCharset;
    }

    /**
     * Get InCharset
     *
     * @return string
     */
    public function getInCharset()
    {
        return $this->inCharset;
    }

    /**
     * Set OutCharset
     *
     * @param string $outCharset
     */
    public function setOutCharset($outCharset)
    {
        $this->outCharset = $outCharset;
    }

    /**
     * Set OutCharset
     *
     * @return string
     */
    public function getOutCharset()
    {
        return $this->outCharset;
    }

    /**
     * Sauvegarde physique du fichier sur le serveur
     *
     * @param string $filePath      Chemin de destination
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function saveFileToPath($filePath)
    {
        $csvInfos = $this->getContent();

        file_put_contents($filePath, $csvInfos);
    }

    /**
     * Permet de retourner le fichier CSV généré
     *
     * @param string $filename      Nom du fichier
     * @param boolean $appendDate   Date en fin de nom de fichier ?
     * @return Response
     *
     * @author André Tapia <atapia@webnet.fr>
     */
    public function getResponse($filename, $appendDate = true)
    {
        if ($appendDate) {
            $now = new \DateTime();
            $filename .= '_'. date_format($now, 'Ymd');
        }
        $filename .= '.' . $this->extension;

        $charset = ($this->getOutCharset() !== null) ? $this->getOutCharset() : $this->getInCharset();

        $response = new Response();
        $response->setContent($this->getContent());
        $response->headers->set('Content-Type', "text/csv; charset=$charset");
        $response->headers->set('Content-encoding', $charset);
        $response->headers->set('Content-Disposition', "attachment; filename=\"$filename\"");

        return $response;
    }
}
