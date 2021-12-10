const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');
const burger = document.querySelector('#burger'); // era antes #menu
let menuOpen = false;
const opciones = document.querySelectorAll('#burger ul li');

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    burger.classList.remove('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    burger.classList.add('active');
    menuOpen = false;
  }
});

// Al seleccionar una opción del menú, este se cierra
for (const op of opciones) {
  op.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    burger.classList.add('active');
    menuOpen = false;
  });
}

// TODO: Al clicar fuera del menú, debe cerrarse
document.body.addEventListener('mouseup', () => {
  menuBtn.classList.remove('open');
  burger.classList.add('active');
  menuOpen = false;
});

// TODO: El menu hamburguesa debe permanecer oculto hasta pasar la tarjeta de bienvenida
