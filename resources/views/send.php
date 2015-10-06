<?php 
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $description = $_POST['description'];
    $to = "42084145ab2a6e02e"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $subject = "Job Application from: " . $name;
    $message = $name . " wrote the following:" . "\n\n" . $description;

    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    header('Location: https://darkhorse.com/');
    die();
    }
?>
