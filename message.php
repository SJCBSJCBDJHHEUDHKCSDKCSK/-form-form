<?php

$name=$_POST["name"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$website=$_POST["website"];
$message=$_POST["message"];
$sendedemail=$_POST["sendedemail"];

  if(!empty($email) && !empty($message)&&!empty($sendedemail)){
   if(filter_var($email,FILTER_VALIDATE_EMAIL) && filter_var($sendedemail,FILTER_VALIDATE_EMAIL)){
  $to="$sendedemail";
$subject="my message";
$body= " name:$name email:$email phone:$phone website: $website  message:$message";
     if(mail( $to,$subject,$body)){
        echo "  your message has ben sended";
 
     }else{
        echo " sorry , failed to send your email";
     }
   }else{
    echo " email not vailed";
   }
  }else{
    echo " email and message are  required!";
  }
