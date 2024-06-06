// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');


btnMenu.addEventListener('click', (event) => {
  // Icon X
  barIconX.classList.toggle('fa-times');

  if (activador) {
    menu.style.left = '0%'; 
    menu.style.transition = '0.5s';
    activador = false;
  } else {
    menu.style.left = '-100%';
    activador = true;
  }
});

// Add class "active"
let enlaces = document.querySelectorAll('.list-container li a');

enlaces.forEach((element) => {
  element.addEventListener('click', (event) => {
    enlaces.forEach((link) => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  });
});

// Scroll Effect
let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  // Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  } else {
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  // Scroll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  // Conditions
  if (arriba <= 600) {
    menuContent.style.borderBottom = 'none';

    // Ocultar Go Top
    goTop.style.right = '-100px';
  } else {
    menuContent.style.borderBottom = '3px solid #ff2e63';

    // Mostrar Go Top
    goTop.style.right = '0px';
  }
}

// Go Top Click
let ja = document.querySelector('#ja');

goTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600; // Para Safari
  document.documentElement.scrollTop = 600; // Para Chrome, Firefox, IE y Opera
});


