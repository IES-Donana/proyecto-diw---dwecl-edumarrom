const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');
let menuOpen = false;
const opciones = document.querySelectorAll('#menu ul li');

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.remove('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.add('active');
    menuOpen = false;
  }
});

// Al seleccionar una opción del menú, este se cierra
for (const op of opciones) {
  op.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menu.classList.add('active');
    menuOpen = false;
  });
}

// TODO: Al clicar fuera del menú, debe cerrarse
menu.addEventListener('mouseup', () => {
  menuBtn.classList.remove('open');
  menu.classList.add('active');
  menuOpen = false;
});

// TODO: El menu hamburguesa debe permanecer oculto hasta pasar la tarjeta de bienvenida
