let button = document.getElementsByClassName('change-mode')[0];
let nav = document.querySelector('nav'); 
button.addEventListener("click", addClass)

function addClass(){
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode')
        nav.classList.remove('dark-mode')
    }else{
        document.body.classList.add('dark-mode')
        nav.classList.add('dark-mode')
    }
}