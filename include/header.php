<?php
if ($bodyId == "about") {
	$title = "";
} else {
	$title = " " . $title;
}
$title = "Allison Weinreb O'Brien" . $title;
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title><?php echo $title ?></title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

	<link rel="stylesheet" media="all" href="styles/reset.css" />
	<link rel="stylesheet" media="all" href="styles/styles.css" />

	<script src="scripts/jquery-1.6.2.min.js"></script>
	<script src="scripts/ally.portfolio.js"></script>
</head>
<body id="<?php echo $bodyId ?>">

<div id="main-wrap">

	<div id="header">
		<h1><a href="/"><?php echo $title ?></a></h1>

		<ul>
			<li id="nav-about"><a href="index.php">About</a></li>
			<li id="nav-portfolio"><a href="portfolio.php">Portfolio</a></li>
			<li id="nav-resume"><a href="resume.php">Resume</a></li>
			<li id="nav-contact"><a href="mailto:allyswo@gmail.com">Contact</a></li>
		</ul>
	</div>

	<div id="content">