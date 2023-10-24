
function inicia(){
    document.getElementById("btnAdd").addEventListener("click", function(){
        var list = document.getElementById("list");
        var postPopup = document.createElement("postPopup");
        // var item = document.getElementById("itemName");
        var description = document.getElementById("descPost").value;
        // var image = document.getElementById("picture");
        postPopup.textContent = description;
        list.appendChild(postPopup);
        description = "";
        description.focus();
    })
}

window.addEventListener("load", inicia);

const newPost = document.getElementById("list");