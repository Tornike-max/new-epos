<?php

namespace app;

use Error;
use Resend;

class SendEmail
{
    protected $resendApiKey;
    protected $message;
    protected $email;
    protected $resendSendTo;

    public function __construct($resendApiKey, $message, $email, $resendSendTo)
    {
        $this->resendApiKey = $resendApiKey;
        $this->message = $message;
        $this->email = $email;
        $this->resendSendTo = $resendSendTo;
    }

    public function sendEmail()
    {
        $resend = Resend::client($this->resendApiKey);

        if (!$this->checkInputs()) {
            throw new Error('Error while sending email from server: Invalid inputs');
        }

        try {
            $resend->emails->send([
                'from' => 'Epos Software <onboarding@resend.dev>',
                'to' => ["$this->resendSendTo"],
                'subject' => "Sender Email: {$this->email}",
                'html' => "<strong>{$this->message}</strong>",
            ]);
            echo json_encode(["message" => "Email sended successfully"]);
        } catch (\Exception $e) {
            http_response_code(404);
            exit('Error: ' . $e->getMessage());
        }
    }

    public function checkInputs()
    {
        return !empty($this->email) && !empty($this->message) && filter_var($this->email, FILTER_VALIDATE_EMAIL);
    }
}
