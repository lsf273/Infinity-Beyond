<?php
  // echo phpinfo();
  $mysqli = mysqli_connect('localhost','lsf273_infinity','{tg#r5VT=8nU', 'lsf273_infinity-contact');
  if ($mysqli->connect_errno) {
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }	
  
  if($_SERVER['REQUEST_METHOD'] =='POST') {
	 
  $name  = $_POST['name'];
  $email   = $_POST['email'];
  $subject   = $_POST['subject'];
  $message       = $_POST['message'];
  
  $query = "INSERT INTO contact(name, email, subject, message) VALUES('$name','$email', '$subject', '$message')";
					
if ($mysqli->query($query) === TRUE) {
		$to      = 'loganfetter62@gmail.com';
		$subject = 'Message from Space Website';
		$msg     = "Name: $name \n" . 
		"Email Address: $email \n" .
		"Subject: $subject \n" .
		"Message: $message \n";
		mail($to, $subject, $msg, 'From:' . $email);
	} else {
		die ($mysqli->error);
	}
}
?>