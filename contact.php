<?php
  $link = mysql_connect('loganfetter.com','lsf273','A)x!~oa#Aoks') or die (mysql_error($link));
  $db = mysql_select_db('lsf273_infinity-contact',$link) or die (mysql_error($link));
  
  if($_SERVER['REQUEST_METHOD'] =='POST') {
	 
  $Name  = $_POST['name'];
  $Email   = $_POST['email'];
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