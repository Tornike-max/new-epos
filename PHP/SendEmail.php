<?php

namespace app;

use Error;

class SendEmail
{
    protected $resendApiKey;
    protected $message;
    protected $email;

    public function __construct($resendApiKey, $message, $email)
    {
        $this->resendApiKey = $resendApiKey;
        $this->message = $message;
        $this->email = $email;
    }

    public function sendEmail()
    {
        $resend = \Resend::client($this->resendApiKey);

        if ($this->checkInputs() === true) {
            throw new Error('Error while sending email from server');
            return;
        }

        try {
            $resend->emails->send([
                'from' => 'Epos Software <onboarding@resend.dev>',
                'to' => ['info@epossoft.net'],
                'subject' => "Sender Email: {$this->email}",
                'html' => "<strong>{$this->message}</strong>",
            ]);
        } catch (\Exception $e) {
            exit('Error: ' . $e->getMessage());
        }
    }

    public function checkInputs()
    {
        try {
            $result = true;
            if (!isset($this->email) || isset($this->message)) {
                $result = false;
            }

            return $result;
        } catch (\Throwable $e) {
            return $e->getMessage();
        }
    }
}
