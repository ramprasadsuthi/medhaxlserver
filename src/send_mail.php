<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ramprasadsuthi@medhaxl.in"; // Your email address
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";

    $body = "<h2>Contact Form Submission</h2>
             <p><strong>Name:</strong> $name</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Message:</strong><br>$message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
