<?php

$hostname = 'localhost';
$bancodedados = 'foto';
$usuario = 'root';
$senha = 'herestonight';

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

$msg = false;

if(isset($_FILES['arquivo']) || isset($_POST['price']) || isset($_POST['item']) || isset($_POST['description'])){

    $nome_original = $mysqli->real_escape_string($_POST['item']);
    $preco = 'R$' . $mysqli->real_escape_string($_POST['price']);
    $descricao = $mysqli->real_escape_string($_POST['description']);
    $extensao = strtolower(substr($_FILES['arquivo']['name'], -4));
    $novo_arquivo = $nome_original . '_' . md5(time()) . $extensao;
    $diretorio = "upload/";
    move_uploaded_file($_FILES['arquivo']['tmp_name'], $diretorio.$novo_arquivo);

    $sql_code = "INSERT INTO imagens (ID, ARQUIVO, DATA, PRECO, DESCRICAO) VALUES ( null, '$novo_arquivo', NOW(), '$preco', '$descricao')";
    if($sql_query = $mysqli->query($sql_code) or die("falha na execução do código SQL: " . $mysqli->error)){
        echo ("Aquivo enviado com sucesso!");
    }else{
        echo ("Falha ao enviar arquivo.");
    }
    
    header('Location: \HTML/perfil.html');

}

?>