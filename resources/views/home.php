<!DOCTYPE html>
<html>
	<head>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">

		<title>Dark Horse</title>

		<link rel="icon" type="image/x-icon" href="favicon.ico">

		<link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>

		<link rel="stylesheet" href="css/app.css">
		<link rel="stylesheet" href="css/bootstrap-theme.css">
		<link rel="stylesheet" href="css/bootstrap-theme.min.css">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/mobile.css" type="text/css" media="handheld">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

		<script src="{{ asset('/vendor/modernizr.min.js') }}"></script>
	</head>

	<body>
		<?php
		include 'sections/cover.php';

		include 'sections/navbar.php';
		include 'sections/about.php';
		include 'sections/locations.php';
		include 'sections/map.php';
		include 'sections/contact.php';


		include 'sections/footer.php';
		?>


    <script src="https://maps.googleapis.com/maps/api/js?signed_in=true&callback=initMap"
        async defer></script>
    <!-- Remeber to activate this key <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXfx99bequQyYkCDY9-lHhsRwEWiHERz4" type="text/javascript"></script> -->
	<script src="js/app.js"></script>
	<script src="js/bootstrap-theme.js"></script>
	<script src="js/bootstrap-theme.min.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script>window.jQuery || document.write('<script src="vendor/jquery.min.js"><\/script>')</script>
    <script src="../../dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>

	</body>
</html>