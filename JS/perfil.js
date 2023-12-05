document.addEventListener('DOMContentLoaded', function () {
    var files = document.querySelectorAll(".img_file");
    var names = document.querySelectorAll(".nome_file");
    var descriptions = document.querySelectorAll(".desc_file");
    var prices = document.querySelectorAll(".preco_file");

    var divCount = 0;

    var container = document.getElementById("photos");
    
    function createDiv() {
        for (var i = 0; i < files.length; i++) {
            divCount++;

            var div = document.createElement("div");
            div.classList.add('item');
            div.className += divCount;

            div.innerHTML = '<img class="img_file" src="' + files[i].src + '" alt="Imagem ' + names[i].textContent + '">' +
                             '<h3 class="nome_file">' + names[i].textContent + '</h3>' +
                             '<h5 class="preco_file">' + prices[i].textContent + '</h5>' +
                             '<p class="desc_file">' + descriptions[i].textContent + '</p>' +
                             '<a onclick="sendEventData(event);"><ion-icon class="lixo" name="trash"></ion-icon></a>';


            container.appendChild(div);
        }
    }
    
    if (names && prices && descriptions && files) {
        createDiv();
    }

    
});  

document.addEventListener('DOMContentLoaded', function () {
    
    const btn = document.getElementById("btnMenu");
    const menu = document.querySelector(".divMenu");

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

function sendEventData(event) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../PHP/apagar.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(event));
 }