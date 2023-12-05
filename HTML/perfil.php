<?php
    session_start();

    $hostname = 'localhost';
    $usuario = 'root';
    $senha = 'herestonight';
    $bancodedados = 'foto';

    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados) or die($mysqli->connect_error);
    $table = 'imagens';

    $username = $_SESSION['username'];
    if (empty($username)) {
        die('<p>Você não está logado.</p>');
    }
    $pasta = "../PHP/Users/" . $username . "/";
    
    $nome = glob($pasta . '*');

    function pegarNome(string $string) {
        $index = strrpos($string, "/");
        return substr($string, $index + 1);
      }
      
      $arquivos = array_map('pegarNome', $nome);
    
    $contador = 1;
    
    function pesquisar_arquivo($nome_arquivo, $tabela, $mysqli) {
        $query = "SELECT * FROM $tabela WHERE ARQUIVO = '$nome_arquivo'";
        $result = $mysqli->query($query) or die($mysqli->error);
      
        if ($result->num_rows > 0) {
            $row = mysqli_fetch_assoc($result);
            return $row;
        } else {
            return null;
        }
    }
    
    foreach ($arquivos as $arquivo) {
        $result = $mysqli->query("SELECT * FROM imagens") or die($mysqli->error);
        
        $nome_arquivo = $arquivo;
        
        $tabela = "imagens";
        
        $resultado = pesquisar_arquivo($nome_arquivo, $tabela, $mysqli);

        if(!empty($resultado)){
            $nome = basename($arquivo);
            echo "<div id=\"$contador\">";
            echo "<img style='display:none' class='img_file' src=\"../PHP/Users/$username/$arquivo\" alt=\"Imagem $nome\">";
            echo "<h3 style='display:none;' class='nome_file'>{$resultado['NOME']}</h3>";
            echo "<h5 style='display:none;' class='preco_file'>{$resultado['PRECO']}</h5>";
            echo "<p style='display:none;' class='desc_file'>{$resultado['DESCRICAO']}</P>";
            echo "</div>";
            $contador++;
        }
    }
    
?>

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../CSS/perfil.css">
</head>
<body>
    <div id="header">
        <div class="relative">
            <a href="../index.html" class="title">Construchó</a>
            <button id="btnMenu"><ion-icon name="menu" id="menuIcon"></ion-icon></button>
        </div>
    </div>
      
    <div class="container"> 
        <div class="divMenu">
            <a href="../index.html">Home</a>
            <a href="categoria1.php">Materiais</a>
            <a href="categoria2.php">Elétrica/Hidráulica</a>
            <a href="categoria3.php">Acabamento</a>
        </div>
        <div class="user">
            <img src="../assets/Perfil.png" alt="Profile" width="130" id="icon">
        </div>
        <div class="about">
            <p id="edit">Editar Perfil</p>
            <p id="username" name="username">Usuário</p>
            <div class="text">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dicta, quaerat veniam, aliquid omnis vitae possimus sequi explicabo tenetur ullam maiores eaque repudiandae laborum! Minima eveniet nisi dolores deserunt? Corporis!
                </p>
            </div>
        </div>
        <div class="products">
            <p id="section">Produtos</p>
            <div id="photos"></div>
        </div>
    </div>

    <section class="section" id="contact">
        <a href=""><ion-icon class="contatos" name="logo-instagram"></ion-icon></a> 
        <a href=""><ion-icon class="contatos" name="logo-linkedin"></ion-icon></a> 
        <a href=""><ion-icon class="contatos" name="logo-whatsapp"></ion-icon></a> 
        <a href=""><ion-icon class="contatos" name="logo-facebook"></ion-icon></a> 
    </section>
    
    <script type="text/javascript" src="../JS/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src="../JS/perfil.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>