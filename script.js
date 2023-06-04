const toggle = document.querySelector('.toggle');
const nav = document.querySelectorAll('nav')[0]

toggle.addEventListener('click',()=>{
    nav.classList.toggle('active')
    toggle.classList.toggle('x')
    if(toggle.classList.contains('x')){
        toggle.src='icon-close.svg'
    }
    else{ 
    toggle.src='icon-hamburger.svg'
    }
})