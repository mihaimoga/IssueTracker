<?php
// include Database connection file
include("db_connection.php");

// check request
if(isset($_POST))
{
    // get values
    $id = $_POST['id'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $description = $_POST['description'];

    // Updaste User details
    $query = "UPDATE users SET name = '$name', phone = '$phone', email = '$email', description = '$description' WHERE id = '$id'";
    if (!$result = mysql_query($query)) {
        exit(mysql_error());
    }
}