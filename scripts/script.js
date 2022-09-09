const nav = document.querySelector('nav');
const barsIcon = document.querySelector('.bars');

window.addEventListener('click', function(e){
    if(e.target === barsIcon){
        nav.classList.toggle('opened');
    }
    else{
        nav.classList.remove('opened')
    }
})