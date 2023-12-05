<?php
session_destroy();

$hostname = 'localhost';
$bancodedados = 'usuarios';
$usuario = 'root';
$senha = 'herestonight';

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

if(isset($_POST['email-login']) || isset($_POST['password-login'])){
    
    $Email =  $mysqli->real_escape_string($_POST['email-login']);
    $Senha =  $mysqli->real_escape_string($_POST['password-login']);
    
    $sql_code = "SELECT * FROM usuarios WHERE EMAIL = '$Email' AND SENHA = '$Senha'";
    $sql_query = $mysqli->query($sql_code) or die("falha na execução do código SQL: " . $mysqli->error);
    
    $quantidade = $sql_query->num_rows;
    
    if(!isset($_SESSION)){
        session_start();
        echo ('sessão criada com sucesso');
    }
    else{
        session_destroy();
        echo ('sessão encerrada');
        session_start();
    }
    
    
    if($quantidade == 1){
        $usuario = $sql_query->fetch_assoc();
        
        $_SESSION['username'] = $usuario['NOME'];
        session_regenerate_id(true);

            header('Location: \index.html');

            }
}

?>