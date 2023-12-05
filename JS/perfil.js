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
