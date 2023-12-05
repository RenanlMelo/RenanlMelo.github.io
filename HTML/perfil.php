<?php
    $hostname = 'localhost';
    $bancodedados = 'foto';
    $usuario = 'root';
    $senha = 'herestonight';

    $mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados) or die($mysqli->connect_error);
    $table = 'imagens';

    $result = $mysqli->query("SELECT * FROM $table ORDER BY DATA DESC LIMIT 1") or die($mysqli->error);

    if ($data = $result->fetch_assoc()) {
        echo "<img class='img_file' src='../PHP/upload/{$data['ARQUIVO']}'>";
        echo "<p class='nome_file' style='display:none'>{$data['NOME']}</p>";
        echo "<p class='desc_file' style='display:none'>{$data['DESCRICAO']}</p>";
        echo "<p class='preco_file' style='display:none'>{$data['PRECO']}</p>";
    } else {
        echo "Nenhum dado encontrado.";
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
            <a href="categoria1.html">Materials</a>
            <a href="categoria2.html">Electrical/Hydraulic</a>
            <a href="categoria3.html">Finishing</a>
        </div>
        <div class="user">
            <img src="../assets/Perfil.png" alt="Profile" width="130" id="icon">
        </div>
        <div class="about">
            <p id="edit">Edit Profile</p>
            <p id="username" name="username">Username</p>
            <div class="text">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dicta, quaerat veniam, aliquid omnis vitae possimus sequi explicabo tenetur ullam maiores eaque repudiandae laborum! Minima eveniet nisi dolores deserunt? Corporis!
                </p>
            </div>
        </div>
        <div class="products">
            <p id="section">Products</p>
            <div id="photos"></div>
        </div>
    </div>

    <section class="section" id="contact">
        <a href=""><ion-icon class="contatos" name="logo-instagram"></ion-icon></a> 
        <a href=""><ion-icon class="contatos" name="logo-linkedin"></ion-icon></a> 
        <a href=""><ion-icon class="contatos" name="logo-whatsapp"></ion-icon></a> 
        <a href=""><ion-icon class="contatos" name="logo-facebook"></ion-icon></a> 
    </section>
    
    <script type="text/javascript" src="../JS/perfil.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>