<?php

namespace Webnet\Bundle\SwissArmyBundle\Service;

use Swift_Mailer;

/**
 * Service permettant d'envoyer des mails depuis l'application à
 * l'aide de template TWIG
 *
 * @author Antoine Pacaud <apacaud@webnet.fr>
 * @author André Tapia <atapia@webnet.fr>
 */
class MailerService
{
    /**
     * @var \Twig_Environment
     */
    private $twig;

    /**
     * @var \Swift_Mailer
     */
    private $mailer;

    /**
     * Parametres du service
     * @var array
     */
    protected $parameters;

    /**
     * Constructeur du service Mailer
     *
     * @param \Twig_Environment $twig       Service TWIG
     * @param \Swift_Mailer     $mailer     SwiftMailer
     * @param array             $parameters Parametres du mailer
     */
    public function __construct(\Twig_Environment $twig, Swift_Mailer $mailer, $parameters)
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
     */
    public function sendMessage($to, $templateAlias, $vars = array())
    {
        $template = $this->twig->loadTemplate($templateAlias);

        $subject = $template->renderBlock('subject', $vars);
        $textBody = $template->renderBlock('body_text', $vars);
        $htmlBody = $template->renderBlock('body_html', $vars);

        $message = \Swift_Message::newInstance()
            ->setSubject($subject)
            ->setFrom($this->parameters['daemon_email'])
            ->setTo($to);

        if (!empty($htmlBody)) {
            $message->setBody($htmlBody, 'text/html')
                    ->addPart($textBody, 'text/plain');
        } else {
            $message->setBody($textBody);
        }

        $this->mailer->send($message);
    }
}
