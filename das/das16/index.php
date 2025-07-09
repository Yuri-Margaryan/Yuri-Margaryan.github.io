<?php
$title = "Home";
$headline = "Personal Home Page";
$paragraph = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate accusantium similique in illo officia molestias repellendus corrupti alias a exercitationem, tempore iste dolor reiciendis, quisquam eos sint perferendis unde ex.";

$x = 15;
$y = 15;
$z = $x + $y;

$x == $y ;

$z = $x + $y ;

$x % $y ;
echo $x % 4 ;
echo $z;
echo $y % 4 ;

echo $x == $y;
$img = "https://tumo.org/wp-content/uploads/2024/01/1-2.jpg";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo "document";?></title>
</head>
<body>
    <p> Sum <?php echo $z; ?> </p>
    <img style="width: 100px" src="<?php echo $img ;?>">
<?php

echo "<p>Hello World!</p>";

//echo "string";

echo "<p>sring44</p>";

echo "<p>41</p>";

$name = 'Yuri';

echo $name;

$name = ' Margaryan';

echo $name;

$name = 'Yuri';

echo " <p>My Name is $name</p>";

echo " <p>My Last Name is Margaryan</p>";

echo " <p>MY NAME IS</p>";

echo "<h1>Yuri</h1>";
?> 
</body>
</html>