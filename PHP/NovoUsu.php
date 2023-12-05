<?php
session_start();

$hostname = 'localhost';
$usuario = 'root';
$senha = 'herestonight';
$bancodedados1 = 'usuarios';

$mysqli1 = new mysqli($hostname, $usuario, $senha, $bancodedados1);

$hostname = 'localhost';
$usuario = 'root';
$senha = 'herestonight';
$bancodedados2 = 'foto';

$mysqli2 = new mysqli($hostname, $usuario, $senha, $bancodedados2);

if(isset($_POST['email-register']) || isset($_POST['password-register']) || isset($_POST['username']) ){

    $Usuario =  $mysqli1->real_escape_string($_POST['username']);
    $Senha =  $mysqli1->real_escape_string($_POST['password-register']);
    $Email =  $mysqli1->real_escape_string($_POST['email-register']);
    
    $sql_code = "INSERT INTO usuarios (NOME, SENHA, EMAIL, DATA) VALUES ( '$Usuario', '$Senha', '$Email', NOW())";
    $sql_query = $mysqli1->query($sql_code) or die("falha na execução do código SQL: " . $mysqli->error);

    $diretorio = "Users/";

    mkdir ($diretorio.$Usuario, 0755);

    $user = $diretorio.$Usuario;
    $_SESSION['username'] = $Usuario;

    header('Location: \index.html');
    
}

?>