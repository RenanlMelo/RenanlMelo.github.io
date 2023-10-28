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

// Nav update


document.querySelectorAll('a.nav').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var headerSize = header.clientHeight;
      const targetId = this.getAttribute('href').substring(1); // Remove o "#" do href
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const offset = targetElement.offsetTop - headerSize; // Centralizar na tela
        window.scrollTo({
          top: offset,
        });
      }
    });
  });
  
// switch between register and login
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

//open and close popUp 
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

//erase inputs whe close popUp
function eraseInputs() {
    var forms = document.querySelector('.popup-box');
    var inputs = forms.querySelectorAll('input');
    var divs = forms.querySelectorAll('[class^="input-box"]');
    
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
    for(i = 0; i < divs.length; i++){
        divs[i].className = 'input-box';
    }
}

//error messages
var alertLogin = document.querySelector('.alertLogin');
var alertReg = document.querySelector('.alertReg');

var campoEmail1 = document.getElementById('email-login')
var campoPass1 = document.getElementById('password-login')

var campoUser = document.getElementById('username')
var campoEmail2 = document.getElementById('email-register')
var campoPass2 = document.getElementById('password-register')

alertLogin.addEventListener('submit', (e) => {
    
    e.preventDefault();

    checkInputsLogin();

    verifyLog();
});

alertReg.addEventListener('submit', (e) => {
    
    e.preventDefault();

    checkInputsRegister();

    verifyReg();
});


function checkInputsLogin() {
   
    const campoEmail1Value = campoEmail1.value.trim();
    const campoPass1Value = campoPass1.value.trim();
       
    if(campoEmail1Value === '') {
        errorValidation(campoEmail1, 'This field is required')
    }

    else {
        successValidation(campoEmail1)
    }

    if(campoPass1Value === '') {
        errorValidation(campoPass1, 'This field is required');
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
        errorValidation(campoUser, 'This field is required')
    }
    
    else {
        successValidation(campoUser)
    }

    if(campoEmail2Value === '') {
        errorValidation(campoEmail2, 'This field is required')
    }
    
    else {
        successValidation(campoEmail2)
    }

    if(campoPass2Value === '') {
        errorValidation(campoPass2, 'This field is required')
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

function verifyLog() {
        
        var logindivs = alertLogin.querySelectorAll('[class^="input-box"]');
        var cont = 0;
    
        for(var i = 0; i < logindivs.length; i++){
            if(logindivs[i].classList.contains('success')){
                cont += 1;
            }
        }
    
        if(cont === logindivs.length){
            wrapper.classList.remove('active');
            wrapper.classList.remove('active-popup');
            box.classList.remove('active-popup');
            back.classList.remove('active-blur'); 
            header.classList.remove('active');
            btnPopup.classList.add('active');
            btnPopup.textContent = "";
            icon.classList.add('active');
            document.body.style.overflowY = "visible";
        }
};

function verifyReg() {
        
        var logindivs = alertReg.querySelectorAll('[class^="input-box"]');
        var cont = 0;
        
        for(var i = 0; i < logindivs.length; i++){
            if(logindivs[i].classList.contains('success')){
                    cont += 1;
            }
        }
        
        if(cont === logindivs.length){
            wrapper.classList.remove('active');
            wrapper.classList.remove('active-popup');
            box.classList.remove('active-popup');
            back.classList.remove('active-blur'); 
            header.classList.remove('active');
            btnPopup.classList.add('active');
            btnPopup.textContent = "";
            icon.classList.add('active');
        }
};   

//menu with media query
btnMenu.addEventListener('click', ()=> {
    nav.classList.toggle('active-menu');
    userPopup.classList.remove('active');
});

const icon = document.querySelector('.iconUser');
const userPopup = document.querySelector('.userPopup');

icon.addEventListener('click', ()=> {
    userPopup.classList.toggle('active');
});

//new post function
const list = document.getElementById("postList");
const inputs = document.getElementById("inputs");
const postButton = document.getElementById("newPost");
const submitPost = document.getElementById("postItem");
var i = 0;

postButton.addEventListener("click", function() {

    userPopup.classList.remove('active');

    postItem();
    
});

function postItem(){
    var post = document.createElement("div");
    post.textContent = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
    post.style.background = "red";
    post.style.width = "100%";
    post.style.height = "50vh";
    list.appendChild(post);
    post.appendChild(inputs);
    post.classList.add('post');
    alert('a');
    i += 1;
    postButton.onclick = nextPage(i);
}

function nextPage(i){
    if(i === 2){
        // Crie um novo elemento de página
        const newPage = document.createElement('div');
        newPage.className = 'page';
        // Adicione conteúdo à nova página
        newPage.innerHTML = 'Conteúdo da nova página';
        // Adicione a nova página ao documento
        document.body.appendChild(newPage);
    }
}

// Selecione todos os elementos <input> na página
const formInputs = document.querySelectorAll('input');

// Itere por todos os elementos <input> e adicione os ouvintes de eventos a cada um
formInputs.forEach(function (input) {
    const label = input.nextElementSibling;

    input.addEventListener('focus', function () {
        label.style.top = 0;
        label.style.fontSize = '0.9em';
    });

    input.addEventListener('blur', function () {
        if (input.value.length === 0) {
            label.style.top = '';
            label.style.fontSize = '';
        }
    });

    input.addEventListener('input', function () {
        if (input.value.length > 0) {
            label.style.top = 0;
            label.style.fontSize = '0.9em';
        } else {
            label.style.top = '';
            label.style.fontSize = '';
        }
    });
});
