<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="src/View/home.js" defer></script>
    <link rel="stylesheet" href="style/home.css">
    <link rel="stylesheet" href="style/style.css">
    <title>Home</title>
</head>
<body>

    <?php require_once 'include/header.php' ?>

    <main>

        <h2>Trending movies</h2>
        <div class="trendingMoviesDiv"></div>

        <h2>Trending series</h2>
        <div class="trendingSeriesDiv"></div>

        <h2>New movies</h2>
        <div class="newMoviesDiv"></div>

        <h2>Today's series</h2>
        <div class="newSeriesDiv"></div>

    </main>

    <?php require_once 'include/footer.php' ?>
    
</body>
</html>