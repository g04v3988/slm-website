<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: SpreadLuv.com'; 
    $to = 'g04v3988@gmail.com'; 
    $subject = 'Email Inquiry';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
?>

<?phphttp://localhost:11368/SpreadLuv%20Website/images/galleries/latest/1.jpg
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Thank you for your email!</p>';
    } else { 
        echo '<p>Oops! An error occurred. Try sending your message again.</p>'; 
    }
} else { 
    echo '<p>Oops! An error occurred. Mail not sent.</p>'; 
}
?>