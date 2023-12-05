<?php

$hostname = 'localhost';
$bancodedados = 'usuarios';
$usuario = 'root';
$senha = 'herestonight';

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

if(isset($_POST['email-register']) || isset($_POST['password-register']) || isset($_POST['username']) ){

    $Nome =  $mysqli->real_escape_string($_POST['email-register']);
    $Senha =  $mysqli->real_escape_string($_POST['password-register']);
    $Usuario =  $mysqli->real_escape_string($_POST['username']);

    $sql_code = "INSERT INTO usuarios (NOME, SENHA, EMAIL) VALUES ( '$Usuario', '$Senha', '$Nome')";
    $sql_query = $mysqli->query($sql_code) or die("falha na execução do código SQL: " . $mysqli->error);

    header('Location: \index.html');
                

}

?>