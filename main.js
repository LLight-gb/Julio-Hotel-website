//Selectors

let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

// click event

 hamburgerMenu.addEventListener('click',function(){
     header.classList.toggle('menu-open');
 })

