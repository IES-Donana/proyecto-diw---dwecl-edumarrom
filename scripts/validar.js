const form = document.forms[0];
const boton = document.getElementById('enviar');

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

boton.addEventListener('click', validar);
form.addEventListener('change', activaMensaje);

nombre.addEventListener('change', validaNombre);
email.addEventListener('change', validaEmail);
asunto.addEventListener('keyup', validaAsunto);
mensaje.addEventListener('change', validaMensaje);

function activaMensaje() {
  const e = document.querySelector('#mensaje');
  if(nombre.checkValidity() && email.checkValidity() && asunto.checkValidity()) {
    e.disabled = false;
    return true;
  }
  return false;
}

// Crea el elemento que mostrará el error
const mensajeError = document.createElement('div');
mensajeError.classList.add('entrada-error-mensaje');

// Mensajes de error
const missing = (e) =>`El ${e.name} no puede estar vacío.`;
const missmatch = (e) =>`Debe introducir un ${e.name} válido.`;
const tooshort = (e) => `El ${e.name} debe tener al menos ${e.minLength} caracteres.`;
const toolong = (e) => `El ${e.name} no puede superar los ${e.minLength} caracteres.`;

function error(e) {
  mensajeError.textContent = e.validationMessage;
  e.classList.add('entrada-error');
  e.insertAdjacentElement('afterend', mensajeError);
}

function borrarError() {
  const formulario = document.forms[0];
  for (const e of formulario.elements){
    e.setCustomValidity('');  //Si no ponemos el mensaje en blanco, se determinará validación incorrecta
    mensajeError.textContent = e.validationMessage;
  }
}

function validar(evento) {
  borrarError();
  if(validaNombre() && validaEmail() && validaAsunto() && validaMensaje()
    && confirm('¿Estás seguro?')) {
    return true;
  } else {
    evento.preventDefault();
    return false;
  }
}

function validaNombre() {
  borrarError();
  const e = document.querySelector('#nombre');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
        e.setCustomValidity(missing(e));
    }
    if(e.validity.patternMismatch) {
        e.setCustomValidity(missmatch(e));
    }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Nombre correcto');
  e.classList.remove('entrada-error');
  return true;
}

function validaEmail() {
  borrarError();
  const e = document.querySelector('#email');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
        e.setCustomValidity(missing(e));
    }
    if(e.validity.patternMismatch) {
        e.setCustomValidity(missmatch(e));
    }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Email correcto');
  e.classList.remove('entrada-error');
  return true;
}

function validaAsunto() {
  borrarError();
  const e = document.querySelector('#asunto');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
        e.setCustomValidity(missing(e));
    }
    if(e.validity.patternMismatch) {
        e.setCustomValidity(missmatch(e));
    }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Asunto correcto');
  e.classList.remove('entrada-error');
  return true;
}

function validaMensaje() {
  borrarError();
  const e = document.querySelector('#mensaje');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
        e.setCustomValidity(missing(e));
    }
    if(e.validity.tooShort) {
        e.setCustomValidity(tooshort(e));
    }

    if(e.validity.tooLong) {
      e.setCustomValidity(toolong(e));
  }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Mensaje correcto');
  e.classList.remove('entrada-error');
  return true;
}
