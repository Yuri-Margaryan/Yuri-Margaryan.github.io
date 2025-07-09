<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<style type="text/css">
		.tb{
			border-collapse:collapse;
		}
		.tb th,td{
			border:1px solid #ccc;
		}
	</style>
</head>
<body>
	<?php
		$host = 'localhost';
		$username = 'root';
		$password = 'root';
		$database = 'yuridb';
		
		@$dbConnect = mysqli_connect($host,$username,$password,$database);
		if(!$dbConnect){
			print_r(mysqli_connect());
			die();
		}

		$selectQueryString = "SELECT * FROM `products` ";

		@$runQuery = mysqli_query($dbConnect, $selectQueryString);

		if(!$runQuery){
			print_r(mysqli_connect_error($dbConnect));
			die();
		}

		@$getDataFromDB = mysqli_fetch_all($runQuery, MYSQLI_ASSOC);
		mysqli_close($dbConnect);
	?>
<!-- 	Այս ֆորմայի միջոցով կարողանում ենք տվյալներ ուղարկել php այնուհետև տվյալների բազա post/get հարցման միջոցով  -->
	<form action="form.php" method="get">
		<input type="text" name="id" style="display:none;" value="<?= isset($_GET['id'])? $_GET['id']:'' ?>" <?= !isset($_GET['id'])?'disabled':'' ?> placeholder="id">
		<input type="text" name="name" placeholder="NAME" value="<?= isset($_GET['name'])? $_GET['name']:'' ?>">
		<input type="text" name="price" placeholder="PRICE" value="<?= isset($_GET['price'])? $_GET['price']:'' ?>">
		<input type="text" name="img" placeholder="Description" value="<?= isset($_GET['img'])? $_GET['img']:'' ?>">
		<input type="text" name="content" placeholder="Image" value="<?= isset($_GET['content'])? $_GET['content']:'' ?>">
		<input type="text" style="display:none;"  name="type" value="<?= isset($_GET['type'])? $_GET['type']:'create' ?>">
		<input type="submit" name="submit" value="RUN">
	</form>
	<div>
		<table class="tb">
			<thead>
				<tr>
					<th>ID</th>
					<th>NAME</th>
					<th>PRICE</th>
					<th>DESCRIPTION</th>
					<th>IMAGE</th>
					<th>ACTION</th>
					<th>ACTION</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach($getDataFromDB as $value): ?>
					<tr>
						<td><?= $value['id'] ?></td>
						<td><?= $value['name'] ?></td>
						<td><?= $value['price'] ?></td>
						<td><?= $value['img'] ?></td>
						<td><?= $value['content'] ?></td>
						<td><a href="index.php?id=<?= $value['id']?>&type=update&name=<?=$value['name']?>&price=<?=$value['price']?>&img=<?=$value['img']?>&content=<?=$value['content']?>">UPDATE</a></td>
						<td><a href="form.php?id=<?= $value['id']?>&type=delete">DELETE</a></td>
					</tr>
				<?php endforeach; ?> 	
			</tbody>
		</table>
	</div>
</body>
</html>