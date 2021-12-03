const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.remove('active');
    /* menuBtn.classList.add('menu-btn-invert'); */
    document.body.classList.add('opacityy');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.add('active');
    /* menuBtn.classList.remove('menu-btn-invert'); */
    document.body.classList.remove('opacityy');
    menuOpen = false;
  }
});
