<?php

namespace App\Model;

class UserModel extends AbstractModel
{
    protected string $table = 'user';

    public function userExist($login): int
    {
        $sql = "SELECT * FROM " . $this->table . " WHERE login = :login";
        $req = $this->conn->prepare($sql);
        $req->execute([":login" => $login]);

        return $req->rowCount();
    }
}

?>