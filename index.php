<?php

    session_start();

    // session_destroy();

    require_once 'vendor/autoload.php';

    use App\Controller\AuthController;

    $router = new AltoRouter();

    $router->setBasePath('/cinetech');


    $router->map('GET', '/', function() {
        require_once __DIR__ . '/src/View/home.php';
    }, 'home');

    $router->map('GET', '/movie/[i:id]', function($id) {
        $_GET['id'] = $id;
        $_GET['type'] = 'movie';

        require_once __DIR__ . '/src/View/details.php';
    }, 'detailMovie');

    $router->map('GET', '/serie/[i:id]', function($id) {
        $_GET['id'] = $id;
        $_GET['type'] = 'serie';

        require_once __DIR__ . '/src/View/details.php';
    }, 'detailSerie');




    $match = $router->match();

    if( is_array($match) && is_callable( $match['target'] ) ) {
        call_user_func_array( $match['target'], $match['params'] ); 
    } else {
        // no route was matched
        header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
    }

?>