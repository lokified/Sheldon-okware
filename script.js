

const menu = document.querySelector('.nav_links');
const openBtn = document.querySelector('#open_menu_btn');
const closeBtn = document.querySelector('#close_menu_btn');
const body = document.querySelector('body');

openBtn.addEventListener('click', () => {

    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";    
});


closeBtn.addEventListener('click', () => {
    
    menu.style.display = "none";
    openBtn.style.display = "inline-block";
    menu.style.transition = "all 800ms ease-in-out"
    closeBtn.style.display = "none";
})