
const burger = document.querySelector('.burger'); 
const menu = document.querySelector('.burger-menu'); 

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active'); 
}); 

/*
const body = document.querySelector('*:not(.burger)'); 

body.addEventListener('click', () => {
    if(menu.classList.contains('menu-active'))
    {
        menu.classList.remove('menu-active')
        console.log(menu.classList)
    }
})
*/ 

