<?php

namespace App\Controller;
use App\Model\MovieModel;

require_once 'vendor/autoload.php';

class BookController
{
    public $model;

    public function __construct()
    {
        $this->model = new MovieModel;
    }

}

?>