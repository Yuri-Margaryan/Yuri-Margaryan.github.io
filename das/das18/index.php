<?php
$x = 18;
$y = 17;
$x == $y;
echo $x === $y;
var_dump($x != $y);
if($x<$y){
echo 'its big';
}
elseif($x == $y){
echo 'it equals';
}
else{
echo 'doesnt equal';
}
$x='Yuri Margaryan 14 Years Old';
$array = array('name' => 'Yuri', 'last name' => 'Margaryan', 'age' => 14, 'phonenumber' => 1234567890, 8 => 58, true, 45, 555);
$array['name'] = 'Yura';
$array['address'] = 'Yerevan, Armenia';
$array[3] = 0;
$array[4] = 58;
$array[6] = array(1,2,3);
$colors = array ('Red', 'Green', 'Blue', 'Yellow', 'Black');
foreach($colors as $color){
$i++;
echo $color.'<br>This Flower is</br>';
}
echo '<pre>';
print_r($array);
echo '</pre>';
echo count($array);
echo $array[0];
?>