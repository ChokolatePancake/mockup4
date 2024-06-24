document.addEventListener('DOMContentLoaded', initBurger)
function initBurger(){
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__links-button');
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('open');
        menu.classList.toggle('show');
    });
}