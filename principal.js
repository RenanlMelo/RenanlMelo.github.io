const wrapper = document.querySelector('.wrapper');
const box = document.querySelector('.popup-box');
const back = document.querySelector('.back');
const header = document.getElementById("cabecalho");
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
    header.classList.add('active');
    document.body.style.overflowY = "hidden";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});

closePopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    box.classList.remove('active-popup');
    back.classList.remove('active-blur');
    header.classList.remove('active');
    document.body.style.overflowY = "visible";
    eraseInputs();
});

function eraseInputs() {
    var forms = document.querySelector('.popup-box');
    var inputs = forms.querySelectorAll('input');

    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}

const alertLogin = document.querySelector('.alertLogin');
const alertReg = document.querySelector('.alertReg');

var campoEmail1 = document.getElementById('email-login')
var campoPass1 = document.getElementById('password-login')

var campoUser = document.getElementById('username')
var campoEmail2 = document.getElementById('email-register')
var campoPass2 = document.getElementById('password-register')

alertLogin.addEventListener('submit', (e) => {
    
    e.preventDefault();

    checkInputsLogin();
});

alertReg.addEventListener('submit', (e) => {
    
    e.preventDefault();

    checkInputsRegister();
});


function checkInputsLogin() {
   
    const campoEmail1Value = campoEmail1.value.trim();
    const campoPass1Value = campoPass1.value.trim();
       
    if(campoEmail1Value === '') {
        errorValidation(campoEmail1, 'Preencha esse campo')
    }

    else {
        successValidation(campoEmail1)
    }

    if(campoPass1Value === '') {
        errorValidation(campoPass1, 'Preencha esse campo');
    }
    
    else {
        successValidation(campoPass1)
    }
}

function checkInputsRegister() {
   
    const campoUserValue = campoUser.value.trim();
    const campoEmail2Value = campoEmail2.value.trim();
    const campoPass2Value = campoPass2.value.trim();
       
    if(campoUserValue === '') {
        errorValidation(campoUser, 'Preencha esse campo')
        alert('a');
    }
    
    else {
        successValidation(campoUser)
    }

    if(campoEmail2Value === '') {
        errorValidation(campoEmail2, 'Preencha esse campo')
    }
    
    else {
        successValidation(campoEmail2)
    }

    if(campoPass2Value === '') {
        errorValidation(campoPass2, 'Preencha esse campo')
    }
    
    else {
        successValidation(campoPass2)
    }

}

function errorValidation(input, message) {
    const formControlDiv = input.parentElement;

    formControlDiv.className = 'input-box error';
    
    const small = formControlDiv.querySelector('small');
    
    small.innerText = message
}

function successValidation(input) {
    const formControlDiv = input.parentElement;

    formControlDiv.className = 'input-box success';
    
    const small = formControlDiv.querySelector('small');
    small.textContent = "";

}

const icon = document.querySelector('.iconUser');
const userPopup = document.querySelector('.userPopup');


// btn2.addEventListener("submit", function(event){
//     if(campoUser.trim() === "" || campoUser.trim() === null || campoEmail2.trim() === "" || campoEmail2.trim() === null || campoPass2.trim() === "" || campoPass2.trim() == null) {
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

// btnMenu.addEventListener('click', ()=> {
//     nav.classList.toggle('active-menu');
// });


//  btn1.addEventListener('click', ()=> {
//      wrapper.classList.remove('active-popup');
//      box.classList.remove('active-popup');
//      back.classList.remove('active-blur'); 
//      btnPopup.classList.add('active');
//      btnPopup.textContent = "";
//      icon.classList.add('active');
//      header.classList.remove('active');
//      document.body.style.overflowY = "visible";
//  });

//  btn2.addEventListener('click', ()=> {
//      wrapper.classList.remove('active');
//      wrapper.classList.remove('active-popup');
//      box.classList.remove('active-popup');
//      back.classList.remove('active-blur'); 
//      btnPopup.classList.add('active');
//      btnPopup.textContent = "";
//      icon.classList.add('active');
//      header.classList.remove('active');
//      document.body.style.overflowY = "visible";
// });

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