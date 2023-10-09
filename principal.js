const wrapper = document.querySelector('.wrapper');
const box = document.querySelector('.popup-box');
const back = document.querySelector('.back');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnPopup = document.querySelector('.btnLogin-popup');
const closePopup = document.querySelector('.close');
const btnMenu = document.querySelector('.btnMenu');
const nav = document.querySelector('.navigation');
const scroll = document.querySelector('.scroll-section');  
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    box.classList.add('active-popup');
    back.classList.add('active-blur');
});

closePopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    box.classList.remove('active-popup');
    back.classList.remove('active-blur');
});

const alertLogin = document.getElementById("alertLogin");
const alertReg = document.getElementById("alertReg");

// btn1.addEventListener("submit", function(event){
//     var campoEmail1 = document.getElementsByName("email-login")[1].value;
//     var campoPass1 = document.getElementsByName("password-login")[1].value;
//     if(campoEmail1.trim() === null || campoPass1.trim() === null) {
//         event.preventDefault();
//         alert("Todos os campos são obrigatórios. Por favor, preencha-os");
//         console.log(foi);
//     }
//     else{
//         console.log(foi);
//         btn1.addEventListener('click', ()=> {
//             wrapper.classList.remove('active-popup');
//             box.classList.remove('active-popup');
//             back.classList.remove('active-blur'); 
//             btnPopup.classList.add('active');
//             btnPopup.textContent = "";
//             icon.classList.add('active');
//         });
//     }
// });

// btn2.addEventListener("submit", function(event){
//     var campoUser = document.getElementsByName("username")[0].value;
//     var campoEmail2 = document.getElementsByName("email-register")[0].value;
//     var campoPass2 = document.getElementsByName("password-register")[0].value;
//     if(campoUser.trim() === "" || campoEmail2.trim() === "" || campoPass2.trim() === "") {
//         event.preventDefault();
//         alert("Todos os campos são obrigatórios. Por favor, preencha-os");
//     }
//     else{
//         btn2.addEventListener('click', ()=> {
//             wrapper.classList.remove('active');
//             wrapper.classList.remove('active-popup');
//             box.classList.remove('active-popup');
//             back.classList.remove('active-blur'); 
//             btnPopup.classList.add('active');
//             btnPopup.textContent = "";
//             icon.classList.add('active');
//         });
//     }
// });

btnMenu.addEventListener('click', ()=> {
    nav.classList.toggle('active-menu');
});

const icon = document.querySelector('.iconUser');
const userPopup = document.querySelector('.userPopup');

 btn1.addEventListener('click', ()=> {
     wrapper.classList.remove('active-popup');
     box.classList.remove('active-popup');
     back.classList.remove('active-blur'); 
     btnPopup.classList.add('active');
     btnPopup.textContent = "";
     icon.classList.add('active');
 });

 btn2.addEventListener('click', ()=> {
     wrapper.classList.remove('active');
     wrapper.classList.remove('active-popup');
     box.classList.remove('active-popup');
     back.classList.remove('active-blur'); 
     btnPopup.classList.add('active');
     btnPopup.textContent = "";
     icon.classList.add('active');
});

icon.addEventListener('click', ()=> {
    userPopup.classList.toggle('active');
});

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


