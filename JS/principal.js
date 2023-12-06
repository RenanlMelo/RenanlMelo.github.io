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

// Scroll to section when navigation link is clicked
document.querySelectorAll('.nav').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerSize = header.clientHeight;
            const offset = targetElement.offsetTop - headerSize;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top when logo is clicked
document.getElementById('logo').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
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

$(document).ready(function () {
    $(".btn1").click(function () {
        var formJQlog = new FormData($(".alertLogin")[0]);

        $.ajax({
            url: '../PHP/login.php',
            type: 'post',
            cache: false,
            processData: false,
            contentType: false,
            data: formJQlog, 
            timeout: 8000,
            success: function (resultado) {
                checkInputsLogin();
                verifyLog();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Erro na requisição AJAX:', textStatus, errorThrown);
            }
        });
    });
});


$(document).ready(function () {
    $(".btn2").click(function () {
        var formJQreg = new FormData($(".alertReg")[0]);

        $.ajax({
            url: '../PHP/NovoUsu.php',
            type: 'post',
            cache: false,
            processData: false,
            contentType: false,
            data: formJQreg, 
            timeout: 8000,
            success: function (resultado) {
                checkInputsRegister();
                verifyReg();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Erro na requisição AJAX:', textStatus, errorThrown);
            }
        });
    });
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
    nav.style.height = "50vh";
});

const icon = document.querySelector('.iconUser');
const userPopup = document.querySelector('.userPopup');
const arrow = document.getElementById('arrow');
const signout = document.getElementById('signOut');

icon.addEventListener('click', ()=> {
    userPopup.classList.toggle('active');
    nav.style.height = "25vh";
});

arrow.addEventListener('click', ()=> {
    nav.style.height = "50vh";
    userPopup.classList.toggle('active');
});

signout.addEventListener('click', ()=> {
    nav.classList.remove('active-menu');
    userPopup.classList.remove('active');
    btnPopup.classList.remove('active');
    icon.classList.remove('active');
    eraseInputs();
})

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
