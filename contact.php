<?php
  // echo phpinfo();
  $mysqli = mysqli_connect('localhost','lsf273_infinity','{tg#r5VT=8nU', 'lsf273_infinity-contact');
  if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }
  echo $mysqli->host_info . "\n";
  
  if($_SERVER['REQUEST_METHOD'] =='POST') {
	 
  $Name  = $_POST['name'];
  $Email   = $_POST['email'];
  $Subject   = $_POST['subject'];
  $Message       = $_POST['message'];
  
  $query = "INSERT INTO contact(Name, Email, Message)
		   
		   VALUES('$name','$email','$message')";
					
					mysql_query($query) or die (mysql_error());
  }
  $to      = 'loganfetter62@gmail.com';
  $subject = 'Message from Portfolio Website';
  $msg     = "First Name: $first_name \n" . 
			 "Last Name: $last_name \n" .
			 "Email Address: $email \n" .
			 "Subject: $subject \n" .
			 "Message: $message \n";
  mail($to, $subject, $msg, 'From:' . $email);
  
?>