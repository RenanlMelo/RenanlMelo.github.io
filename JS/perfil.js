var urlParams = window.location.search.substring(1);

var param = urlParams.split("&");

var paramObj = {};

for(var i=0;i< param.length;i++){
    var par = param[i].split("=");
    paramObj[par[0]] = par[1];
}

var data1 = paramObj.item;
var data2 = paramObj.category;
var data3 = paramObj.price;
data3 = "R$" + data3 + ",00";
var data4 = paramObj.description;
data4 = "Description: " + data4;

console.log(data1);
console.log(data2);
console.log(data3);
console.log(data4);

var data5 = sessionStorage.getItem('imageData');

const photos = document.getElementById("photos");

document.addEventListener("DOMContentLoaded", function() {

    let item = document.createElement("div");
    item.classList.add('item');
    photos.appendChild(item); 
    
    let image = document.createElement("img");
    image.src = data5;
    item.appendChild(image);
    
    let name = document.createElement("h3");
    name.textContent = data1;
    item.appendChild(name);
    
    let category = document.createElement("h4");
    category.textContent = data2;
    item.appendChild(category);
   
    let price = document.createElement("h5");
    price.textContent = data3
    item.appendChild(price);

    let description = document.createElement("p");
    description.textContent = data4;
    item.appendChild(description);

});
function getURLData() {
    var urlParams = new URLSearchParams(window.location.search);
    const data1 = urlParams.get("item");
    const data2 = urlParams.get("category");
    const data3 = urlParams.get("price");
    const data4 = urlParams.get("description");

    if(data1 && data2 && data3 && data4 ){
        decode1 = decodeURIComponent(data1);
        decode2 = decodeURIComponent(data2);
        decode3 = decodeURIComponent(data3);
        decode4 = decodeURIComponent(data4);
    }

    return { decode1, decode2, decode3, decode4 };
}

function load(){
    const imagePath = window.localStorage.getItem("file");
    const image = document.querySelector("#image");
    image.src = "../HTML/" + imagePath;
}

    const { decode1, decode2, decode3, decode4 } = getURLData;

    console.log(decode1);
    console.log(decode2);
    console.log(decode3);
    console.log(decode4);
