<?php
	
	if(!isset($_GET['type'])){
		print_r('Տվյալները բացակայում են');
		die();
	}

	$host = 'localhost'; // գրում ենք հասցեն
	$username = 'root'; // գրում ենք օգտատիրոջ անունը
	$password = 'root'; // գրում ենք գաղտնառը
	$database = 'yuridb'; // գրում ենք տվյալների բազայի անունը
	
	///// Միանում ենք տվյալների բազային
	// Շնիկի նշանը դնում ենք որպեսզի սխալները չբերի
	@$dbConnect = mysqli_connect($host,$username,$password,$database);
	///// $dbConnect փոփոխականի մեջ պահվում է բազայի օբյեկտը
	// Ստուգում ենք արդյոք հաստատվել է կապը բազայի հետ
	if(!$dbConnect){
		// Եթե կապը չի հաստատվել տպում ենք սխալը և դուրս գալիս
		print_r(mysqli_connect());
		die();
	}
	// Գրում ենք	հարցումը
	//$selectQueryString = "SELECT * FROM `users` ";
	@$name = $_GET['name'];
	@$price = $_GET['price'];
	@$img = $_GET['img'];
	@$content = $_GET['content'];
	

	if($_GET['type'] == 'create'){
		$queryString = "INSERT INTO `products`(`name`,`price`,`img`,`content`) VALUES('$name', '$price', '$img','$content') ";
	}else if($_GET['type'] == 'update'){
		if(!isset($_GET['id'])){
			echo 'ID ն բացակայում է';
			die();
		}
		$id = $_GET['id'];
		$queryString = "UPDATE `products` SET `name` = '$name', `price` = '$price', `img` = '$img', `content` = '$content'  WHERE `id`= $id ";

	}else if($_GET['type'] == 'delete'){
		if(!isset($_GET['id'])){
			echo 'ID ն բացակայում է';
			die();
		}
		$id = $_GET['id'];
		$queryString = "DELETE FROM `products` WHERE `id`= $id ";
	}
	// Աշխատացնում ենք	հարցումը
	@$runQuery = mysqli_query($dbConnect, $queryString);
	// Ստուգում ենք արդյոք հարցումը ճիշտ է աշխատել
	if(!$runQuery){
		// Եթե հարցումը չի աշխատել ապա տպում ենք սխալը և դուրս գալիս
		print_r(mysqli_connect_error($dbConnect));
		//echo mysqli_connect_error($dbConnect);
		die();
	}
	header("Location: http://localhost:8888/das23/admin/index.php");

	mysqli_close($dbConnect);

	//Ավարտ	











?>