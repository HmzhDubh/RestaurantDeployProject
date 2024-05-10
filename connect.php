<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$Phone = $_POST['Phone'];
$email = $_POST['email'];
$add = $_POST['add'];
$totalPrice = $_POST['totalPrice'];

// Database connection 


// Create connection
$conn = new mysqli("localhost","root","","cpit405");
if($conn->connect_error) {
    echo "$conn->connect_error";
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO `customer_info`(`id`, `fname`, `lname`, `Phone`, `email`, `add`, `totalPrice`) VALUES (?,?,?,?,?,?)");
    $stmt->bind_param("ssisss", $fname, $lname, $Phone, $email, $add, $totalPrice);
    $execval = $stmt->execute();
    echo $execval;
    echo "order reseved successfully...";
    $stmt->close();
    $conn->close();
}

?>