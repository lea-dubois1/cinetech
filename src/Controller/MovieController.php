<?php

namespace App\Controller;
use App\Model\MovieModel;

require_once 'vendor/autoload.php';

class MovieController
{
    public $model;

    public function __construct()
    {
        $this->model = new MovieModel;
    }

}

?>