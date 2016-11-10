<?php
	if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['description']))
	{
		// include Database connection file 
		include("db_connection.php");

		// get values 
		$name = $_POST['name'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$description = $_POST['description'];

		$query = "INSERT INTO users(name, phone, email, description) VALUES('$name', '$phone', '$email', '$description')";
		if (!$result = mysql_query($query)) {
	        exit(mysql_error());
	    }
	    echo "1 Record Added!";
	}
?>