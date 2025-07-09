<?php
$link = mysqli_connect("localhost", "root", "little", "test");
$result = mysqli_query($link,$sql);
$r
=
mysqli_fetch_assoc($result);
$link
=
mysqli_connect("localhost", "root", "little", "test");
$sql = "SELECT * FROM Pages";
$result
=
mysqli_query($link,$sql);
$result
=
mysqli_query($link,$sql);
while ($r = mysqli_fetch_assoc($result)) {
echo "<pre>"; print_r($r); echo "</pre>";
}
$result
=
mysqli_query($link,$sql);
mysqli_fetch_all($result, MYSQLI_ASSOC);
$link
=
mysqli_connect("localhost", "root", "usbw", "test");
mysqli_connect_error();
mysqli_error($con);
$conn = mysqli_connect("localhost","root", "usbw", "little_site");
mysqli_set_charset($conn,"utf8");
?>
$sql
=
"SELECT title, id FROM pages ORDER BY `order`
$res = mysqli_query($conn, $sql);
echo "<ul id='menu'>";
while ($menuItem = mysqli_fetch_assoc($res)) { echo "<li>".$menuItem["title"]."</li>";
}
echo "</ul>";
mysqli_close($conn);
#menu li{
}
display:inline-block; padding:5px;
background-color:#2E86C1; list-style-type: none;
margin-left:5px;
color:white;
#menu li:hover{
background-color: #D35400; cursor: pointer;
}
<form action="action.php" method="post">
<input type="text" name="title" placeholder="чtpuwqhp">
<input type="number" name="order" placeholder="3&ppwywu hwcwp"> <textarea name="content" placeholder="Fnywlηwyn_pJnLU"></textarea> <input type="submit" name="add">
</form>
if( isset($_POST['add']) ){
$title
=
$_POST['title'];
$content $order
=
$_POST['content'];
=
}
?>
$_POST['order'];
$sql = "INSERT INTO `pages`
(`title`, `content` excerpt`, `order`)
VALUES
('$title', '$content', '$excerpt', $order)
?>