<?php

$hostname = 'localhost';
$bancodedados = 'usuarios';
$usuario = 'root';
$senha = 'herestonight';

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

if(isset($_POST['email-login']) || isset($_POST['password-login'])){

        $Nome =  $mysqli->real_escape_string($_POST['email-login']);
        $Senha =  $mysqli->real_escape_string($_POST['password-login']);

        $sql_code = "SELECT * FROM usuarios WHERE EMAIL = '$Nome' AND SENHA = '$Senha'";
        $sql_query = $mysqli->query($sql_code) or die("falha na execução do código SQL: " . $mysqli->error);

        $quantidade = $sql_query->num_rows;

        if($quantidade == 1){
            $usuario = $sql_query->fetch_assoc();

            if(!isset($_SESSION)){
                session_start();
            }

            $_SESSION['ID'] = $usuario['ID'];
            $_SESSION['email-login'] = $usuario['email-login'];

            print($_SESSION['ID']);
            print($_SESSION['email-login']);

            header('Location: \index.html');
                
            }
}

?>