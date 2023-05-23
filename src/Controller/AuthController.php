<?php

namespace App\Controller;
use App\Model\UserModel;

require_once 'vendor/autoload.php';

class AuthController
{
    public $model;

    public function __construct()
    {
        $this->model = new UserModel;
    }





    public function security(array $array): array|false
    {
        $result = [];
        foreach ($array as $key => $values)
        {
            $result["$key"] = htmlspecialchars(trim($values));

            if(!empty($values))
            {
                continue;
            }else {
                return false;
            }
        }
        return $result;
    }




    

    public function register(?string $login, ?string $password, ?string $passwordConf): array
    {
        $row = $this->model->userExist($login);
        $message = [];

        if($row <1) {
            if($password === $passwordConf) {
                $hash = password_hash($password, PASSWORD_DEFAULT);
                $this->model->insert(['login' => $login, 'password' => $hash]);
                $message['okReg'] = "You've been registered successfully";
            }else{
                $message['errorPass'] = "The passwords do not match";
            }
        }else{
            $message['errorLogin'] = "The login already exist";
        }

        return $message;
    }

    public function login(?string $login, ?string $password): array
    {
        $row = $this->model->userExist($login);
        $message = [];

        if($row > 0) {
            $DBPass = $this->model->select(['password'], ['login' => $login])[0]['password'];

            if(password_verify($password, $DBPass) === true) {
                $_SESSION['user'] = $this->model->select([], ['login' => $login])[0];
                $message['okConn'] = "You've connected successfully";
            }else{
                $message['error'] = 'Your login or password is wrong';
            }
        }else{
            $message['error'] = 'Your login or password is wrong';
        }

        return $message;
    }
}

?>