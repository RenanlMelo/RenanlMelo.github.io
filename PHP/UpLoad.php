<?php
session_start();

$hostname = 'localhost';
$usuario = 'root';
$senha = 'herestonight';
$bancodedados = 'foto';

$mysqli1 = new mysqli($hostname, $usuario, $senha, $bancodedados);

$hostname = 'localhost';
$usuario = 'root';
$senha = 'herestonight';
$bancodedados = 'usuarios';

$mysqli2 = new mysqli($hostname, $usuario, $senha, $bancodedados);

$msg = false;

if(isset($_FILES['file']) && isset($_POST['price']) && isset($_POST['item']) && isset($_POST['description']) && isset($_POST['category'])){

    $nome_original = $mysqli1->real_escape_string($_POST['item']);
    $categoria = $mysqli1->real_escape_string($_POST['category']);
    $preco = 'R$ ' . $mysqli1->real_escape_string($_POST['price']) . ',00';
    $descricao = $mysqli1->real_escape_string($_POST['description']);
    $file = $_FILES['file'];
    $extensao = strtolower(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION));
    $novo_arquivo = $nome_original . '_' . uniqid() . '.' . $extensao;

    
    $username = "Users/" . $_SESSION['username'];
    $filename = $_FILES['file']['name'];
    
    if (!file_exists($username)) {
        mkdir($username);
    }
    
    move_uploaded_file($_FILES['file']['tmp_name'], $username . "/" . $novo_arquivo . "/");
    
    
    $sql_code = "INSERT INTO imagens (ID, ARQUIVO, NOME, CATEGORIA, DATA, PRECO, DESCRICAO) VALUES ( null, '$novo_arquivo', '$nome_original', $categoria, NOW(), '$preco', '$descricao')";
    if($sql_query = $mysqli1->query($sql_code) or die("falha na execução do código SQL: " . $mysqli1->error)){
        echo ("Aquivo enviado com sucesso!");
    }else{
        echo ("Falha ao enviar arquivo.");
    }
    
    header('Location: ../HTML/perfil.php');

}

?>