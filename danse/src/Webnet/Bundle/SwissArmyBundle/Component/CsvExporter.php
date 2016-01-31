<?php

namespace Webnet\Bundle\SwissArmyBundle\Component;

use Symfony\Component\HttpFoundation\Response;

/**
 * CsvExporter
 * Génération d'un export CSV
 *
 * @author Arnaud Zurawczak <azurawczak@webnet.fr>
 */
class CsvExporter
{
    /**
     * Jeu de caractères de sortie
     * @var string
     */
    private $outCharset;

    /**
     * Delimiteur de champ
     * @var string
     */
    private $delimiter;

    /**
     * Flux de travail
     * @var resource
     */
    private $content;

    /**
     * Constructeur du composant
     *
     * @param string $outCharset Jeu de caractères de sortie
     * @param string $delimiter  Delimiteur de champ
     * @author Antoine PACAUD <apacaud@webnet.fr>
     */
    public function __construct($outCharset, $delimiter)
    {
        $this->outCharset = $outCharset;
        $this->delimiter = $delimiter;
        $this->content = fopen('php://temp', 'r+');
    }

    /**
     * Ajouter une ligne de valeurs à l'export

     * @param array $data
     * @author Arnaud Zurawczak <azurawczak@webnet.fr>
     */
    public function addLine(array $data, $inCharset = 'UTF-8')
    {
        $outCharset = $this->outCharset;

        array_walk(
            $data,
            function (&$value, $key) use ($inCharset, $outCharset) {
                $value = iconv($inCharset, $outCharset, $value);
            }
        );

        fputcsv($this->content, $data, $this->delimiter);
    }

    /**
     * Retourne le contenu du fichier d'export
     *
     * @return string
     * @author Arnaud Zurawczak <azurawczak@webnet.fr>
     */
    public function getContent()
    {
        return stream_get_contents($this->content, -1, 0);
    }

    /**
     * Enregistre le contenu du fichier sous forme d'un fichier
     *
     * @param string $filePath Chemin de destination
     * @author Benjamin Levoir <blevoir@webnet.fr>
     */
    public function saveFileToPath($filePath)
    {
        file_put_contents($filePath, $this->getContent());
    }

    /**
     * Permet de retourner le fichier CSV généré
     *
     * @param  string  $filename   Nom du fichier
     * @return \Symfony\Component\HttpFoundation\Response
     * @author Arnaud Zurawczak <azurawczak@webnet.fr>
     */
    public function getResponse($filename)
    {
        $response = new Response();
        $response->setContent($this->getContent());
        $response->headers->set('Content-Type', "text/csv; charset=" . $this->outCharset);
        $response->headers->set('Content-encoding', $this->outCharset);
        $response->headers->set('Content-Disposition', 'attachment; filename="' . $filename . '"');

        return $response;
    }
}
