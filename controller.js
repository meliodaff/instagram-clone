let button = document.getElementsByClassName('change-mode')[0];
let nav = document.querySelector('nav'); 
button.addEventListener("click", addClass)

function addClass(){
    document.body.classList.add('dark-mode')
    nav.classList.add('dark-mode')
}