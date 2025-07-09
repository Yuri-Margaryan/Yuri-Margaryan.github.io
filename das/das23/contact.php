<?php
$db = mysqli_connect('localhost','root','root','yuriDB');
if(!$db){
    echo 'DB error';
}else{
    if (isset($_POST['add'])) {
    $name= $_POST['name'];
    $content = $_POST['info'];
    $img= $_POST['image'];
    $price= $_POST['price'];
    $sql = "INSERT INTO `products`(`name`,`info`,`image`,`price`) VALUES ('$name','$content','$img',$price)";
    $query = mysqli_query($db,$sql);
    mysqli_close($db);
}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Website</title>
</head>
<body>
    <ul>
    <li><a href="index.php">Yuri Inc.</a></li>
        <li style="float:right"><a href="admin/index.php">Admin</a></li>
        <li style="float:right"><a href="products.php">Products</a></li>
        <li style="float:right"><a href="index.php">Home</a></li>
      </ul>
      <center>
        <img src="images/water.jpg">
        <p>
          <form method="post">
                <label>Name</label><br>
                <input type="text" id="fname" name="name" value=""><br>
                <label>Info</label><br>
                <input type="text" id="email" name="info" value=""><br>
                <label>Image</label><br>
                <input type="text" id="fname" name="image" value=""><br>
                <label>Price</label><br>
                <input type="text" id="email" name="price" value=""><br><br>
                <input type="submit" value="Send" name="add">
        </form></p>
      </center>
      <footer>
        <p>Copyright Yuri Inc. 2024<br>
        <p><a href="https://facebook.com/" class="fa fa-facebook"></a>
        <a href="https://twitter.com/" class="fa fa-twitter"></a>
        <a href="https://linkedin.com/" class="fa fa-linkedin"></a>
        <a href="https://youtube.com/" class="fa fa-youtube"></a>
        <a href="https://instagram.com/" class="fa fa-instagram"></a></p>
      </footer>
</body>
</html>