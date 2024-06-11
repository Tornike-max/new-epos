<?php

use app\SendEmail;
use Dotenv\Exception\InvalidPathException;

header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Origin: http://localhost:5173');

require __DIR__ . '/vendor/autoload.php';

try {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
} catch (InvalidPathException $e) {
    die("Error loading .env file: " . $e->getMessage());
}

$resendApiKey = $_ENV['RESEND_API_KEY'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputJSON = file_get_contents('php://input');

    $data = json_decode($inputJSON, true);

    if ($data === null) {
        http_response_code(400);
        exit('Invalid JSON data');
    }

    $message = $data['message'] ?? '';
    $email = $data['email'] ?? '';

    if (empty($message) || empty($email)) {
        http_response_code(400);
        exit('Message and email are required');
    }

    $resend = new SendEmail($resendApiKey, $message, $email);
    $resend->sendEmail();

    echo json_encode(["message" => "Email sent successfully"]);
    exit;
}
