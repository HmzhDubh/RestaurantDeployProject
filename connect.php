<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$Phone = $_POST['Phone'];
$email = $_POST['email'];
$totalPrice = $_POST['totalPrice'];
echo "Enter PHP";
// Database connection 
$hostname = "restaurant-db.mysql.database.azure.com";
$username = "dbuser";
$password = "IVIeeZo_2015";

//az
$con = mysqli_init();
mysqli_ssl_set($con,NULL,NULL, "{path to CA cert}", NULL, NULL);
mysqli_real_connect($conn, "restaurant-db.mysql.database.azure.com", "dbuser", "{your_password}", "{your_database}", 3306, MYSQLI_CLIENT_SSL);
//az
// Create connection
$conn = new mysqli($hostname,$username,$password);
if($conn->connect_error) {
    echo "$conn->connect_error";
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt use restaurantdb;

    echo "Connection successfull";
	
    $stmt = $conn->prepare("INSERT INTO `customer_info`(`id`, `fname`, `lname`, `phone`, `email`, `totalPrice`) VALUES (?,?,?,?,?,?)");
    $stmt->bind_param("2001", $fname, $lname, $Phone, $email, $totalPrice);
    $execval = $stmt->execute();
    echo $execval;
    echo "order reseved successfully...";
    $stmt->close();
    $conn->close();
}

?>