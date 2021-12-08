const boton = document.getElementById('enviar');
boton.addEventListener('click', validar);

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
  e.insertAdjacentElement("afterend", mensajeError);
}

function borrarError() {
  const formulario = document.forms[0];
  for (const e of formulario.elements){
    e.classList.remove('entrada-error');
    e.setCustomValidity('');  //Si no ponemos el mensaje en blanco, se determinará validación incorrecta
    mensajeError.textContent = e.validationMessage;
  }
}

function validar(evento) {
  borrarError();
  if(validaNombre() && validaEmail() && validaAsunto() && validaMensaje()
    && confirm("¿Confirmar envío de formulario?")) {
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
  return true;
}
