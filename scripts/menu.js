/* Quiero esto en JS
<nav id ="burger" class="menu-container active">
    <ul>
      <li><a href="#inicio">Bienvenida</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#cv">Experiencia</a></li>
      <li><a href="#sobre">Sobre mí</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
*/

const nav = document.createElement('nav');
const ul = document.createElement('ul');

const inicio = document.createElement('a');
inicio.setAttribute('href', '#inicio');
inicio.textContent = 'Bienvenida';

const proyectos = document.createElement('a');
proyectos.setAttribute('href', '#proyectos');
proyectos.textContent = 'Proyectos';

const cv = document.createElement('a');
cv.setAttribute('href', '#cv');
cv.textContent = 'Experiencia';

const sobre = document.createElement('a');
sobre.setAttribute('href', '#sobre');
sobre.textContent = 'Sobre mí';

const contacto = document.createElement('a');
contacto.setAttribute('href', '#contacto');
contacto.textContent = 'Contacto';

const elementos = [inicio, proyectos, cv, contacto];

for (const e of elementos) {
  let li = document.createElement('li');
  li.appendChild(e);
  ul.appendChild(li);
}

/* Aplicamos estilo al menú */
nav.appendChild(ul);
nav.setAttribute('id', 'burger');
nav.classList.add('menu-container');
nav.classList.add('active');

/* Colocamos el menu */
document.querySelector('.menu-btn').insertAdjacentElement('afterend', nav);

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
window.addEventListener("scroll", bringmenu);

function bringmenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector('.menu-btn').classList.remove('oculto');
    } else {
        document.querySelector('.menu-btn').classList.add('oculto');
    }
}
