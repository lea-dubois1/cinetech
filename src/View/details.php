<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/cinetech/style/style.css">
    <link rel="stylesheet" href="/cinetech/style/details.css">
    <script src="<?php echo $_GET['type'] === 'movie' ? "/cinetech/src/View/detailsMovie.js" : "/cinetech/src/View/detailsSerie.js";?>" defer></script>
    <title>Details</title>
</head>
<body>

    <?php require_once 'include/header.php' ?>

    <main></main>

    <?php require_once 'include/footer.php' ?>
    
</body>
</html>