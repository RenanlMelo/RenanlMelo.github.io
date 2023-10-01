const wrapper = document.querySelector('.wrapper');
const back = document.querySelector('.back');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnPopup = document.querySelector('.btnLogin-popup');
const closePopup = document.querySelector('.close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    back.classList.add('active-blur');
});

closePopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    back.classList.remove('active-blur');
});