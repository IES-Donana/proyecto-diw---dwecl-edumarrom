const boton = document.getElementById('enviar');
boton.addEventListener('click', validar);

function validar(evento) {
  borrarError();
  if(validaNombre() && validaTelefono() && validaFechaNac() && validaCheck()
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
        e.setCustomValidity('Debe introducir un nombre.');
    }
    if(e.validity.patternMismatch) {
        e.setCustomValidity(`Debe introducir un nombre que no contenga números,
        empiece por una letra y no supere los 45 caracteres.`);
    }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Nombre correcto');
  return true;
}

function validaTelefono() {
  borrarError();
  const e = document.querySelector('#telefono');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
      e.setCustomValidity('Debe introducir un teléfono.')
    }
    if(e.validity.patternMismatch) {
      e.setCustomValidity('El teléfono debe contener 9 cifras.');
    }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Teléfono correcto');
  return true;
}

function validaFechaNac() {
  borrarError();
  const e = document.querySelector('#fechaNac');
  if(!e.checkValidity()) {
    if(e.validity.valueMissing) {
      e.setCustomValidity('Debe introducir una fecha.')
    }
    if(e.validity.rangeUnderflow) {
      e.setCustomValidity('La fecha no puede ser inferior al 01/01/1990.')
    }
    e.reportValidity();
    error(e);
    return false;
  }
  console.log('Fecha correcta');
  return true;
}

function validaCheck() {
  borrarError();
  const e = document.querySelector('#mayor');
  if(!e.checkValidity()) {
    e.setCustomValidity('Confirma que eres mayor de edad.')
    error(e);
    return false;
  }
  console.log('Mayor confirmado');
  return true;
}

function error(e) {
  document.getElementById('mensajeError').innerHTML = e.validationMessage;
  e.className = 'error';
}

function borrarError() {
  const formulario = document.forms[0];
  for (const e of formulario.elements){
    e.className = '';
    e.setCustomValidity('');  //Si no ponemos el mensaje en blanco, se determinará validación incorrecta
    document.getElementById('mensajeError').innerHTML = e.validationMessage;
  }
}
