<?php
$x = 12;
$text1 = 'lorem ipsum';
$color = true;
$x = '[12]';
echo date('y. m. d');
echo gettype($color);
echo 'page php';
$x = 11;
$y = '11';
$a = 10;
$b = 15;
if ($x > $y){
echo $x + $y;
}
elseif($x == $y){
echo 'not true <br>';
}
else{
echo 'not true <br>';
}
$colr = 'blue';
switch($colr){
case 'green':
echo 'is not red';
break;
default;
case 'blue';
echo 'is not red is blue';
}
echo var_dump(($x < $y) or ($a < $b));
echo $x;
echo ++$x;
$x ++;
$x = $x . '';
?>