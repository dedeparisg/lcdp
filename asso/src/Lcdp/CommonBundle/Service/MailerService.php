<?php

namespace Lcdp\Commonbundle\Service;

use Swift_Mailer;

/**
 * Class MailerService
 * Service permettant d'envoyer des mails depuis l'application à l'aide de template TWIG
 *
 * @author André Tapia <atapia@webnet.fr>
 * @package Lcdp\Commonbundle\Service
 */
class MailerService
{
    /**
     * @var \Twig_Environment $twig
     */
    private $twig;

    /**
     * @var \Swift_Mailer $mailer
     */
    private $mailer;

    /**
     * Parametres du service
     *
     * @var array $parameters
     */
    protected $parameters;

    /**
     * email emetteur
     *
     * @var string $senderAdress
     */
    protected $senderAdress;

    /**
     * Constructeur du service Mailer
     *
     * @param \Twig_Environment $twig       Service TWIG
     * @param \Swift_Mailer     $mailer     SwiftMailer
     * @param array             $parameters Parametres du mailer
     */
    public function __construct(\Twig_Environment $twig, Swift_Mailer $mailer, array $parameters)
    {
        $this->twig = $twig;
        $this->mailer = $mailer;
        $this->parameters = $parameters;
    }

    /**
     * Permet d'envoyer un email
     *
     * @param string $to            Destinataire du mail
     * @param string $templateAlias Alias du template
     * @param array  $vars          Variables à insérer dans le template
     * @param array  $bcc           Si on doit afficher les emails en mode cachés
     */
    public function sendMessage($to, $templateAlias, $vars = array(), $bcc = array())
    {
        $template = $this->twig->loadTemplate($templateAlias);

        $subject = $template->renderBlock('subject', $vars);
        $textBody = $template->renderBlock('body_text', $vars);
        $htmlBody = $template->renderBlock('body_html', $vars);

        $message = \Swift_Message::newInstance()
            ->setSubject($subject)
            ->setFrom($this->parameters['daemon_email']);

        if (empty($to)) {
            $to = array($this->parameters['daemon_email']);
        }

        $message->setTo($to);
        $message->setBcc($bcc);

        if (!empty($htmlBody)) {
            $message->setBody($htmlBody, 'text/html')
                ->addPart($textBody, 'text/plain');
        } else {
            $message->setBody($textBody);
        }

        $this->mailer->send($message);
    }
}
