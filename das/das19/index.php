<?php
$arr = array('Aram', 'Elen', 'Anna', 10, 15);
$arr2 = array('name' => 'Aram', 'name1' => 'Elen', 'name2' => 'Anna');
$arr['array']=array(1,2,3);
$arr[10]='Artak';
$arr[8]='Artak';
$arr[]='Arak';
echo '<pre>';
print_r($arr2);
echo '<pre>';
echo $arr['array'][1];
$a=10;
$tiv = count($arr2);
echo 'count of array elements is-'.$count;
for ($i=0; $i < 100; $i++) {
    if ($i == 4) {
        continue;
    }
    echo $i.'<br>';
}
foreach ($arr2 as $key => $value) {
    if ($key=='name2') {
        continue;
    }
    echo $key. '<br>';
    $i++;
}
for ($i=0; $i < 3; $i++) {
    echo $arr[$i].'<br>';
}
$i = 0;
while ($i <= 1) {
    echo $i.'<br>';
    $i++;
}
?>