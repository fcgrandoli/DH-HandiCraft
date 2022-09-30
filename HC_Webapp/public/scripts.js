'use strict';
//VALIDATIONS FRONT HANDLER

const fieldInputEvent = function (type, inputName, charlimit) {
  switch (type) {
    case 'focus':
      inputName.addEventListener('focus', function (e) {
        let field = e.target.parentElement;
        let value = e.target.value;
        let feed = field.querySelector('.feed');
        let msgBackend = field.querySelector('.msg-error');
        let msg = null;
        if (validator.isEmpty(value)) {
          feed.style.display = 'flex';
          msg = 'Este campo no puede quedar vacío.';
          setRedBorder(inputName);
          msghandler(feed, msgBackend, value);
        }
        if (msg) {
          field.classList.remove('valid');
          field.classList.add('invalid');
          feed.innerText = msg;
        } else {
          field.classList.remove('invalid');
          field.classList.add('valid');
        }
      });
      break;
    case 'input':
      inputName.addEventListener('input', function (e) {
        let field = e.target.parentElement;
        let value = e.target.value;
        let feed = field.querySelector('.feed');
        let msgBackend = field.querySelector('.msg-error');
        let msg = null;
        let validmsg = field.querySelector('.feed-valid');
        if (!validator.isLength(value, { min: charlimit })) {
          feed.style.display = 'flex';
          msg = `Este campo debe contener mínimo ${charlimit} caracteres`;
          setRedBorder(inputName);
          msghandler(feed, msgBackend, value);
        } else {
          validmsg = 'El campo es correcto';
          setGreenBorder(inputName);
          msghandler(feed, msgBackend, value);
        }
        if (msg) {
          field.classList.remove('valid');
          field.classList.add('invalid');
          feed.innerText = msg;
        } else {
          field.classList.remove('invalid');
          field.classList.add('valid');
          feed.innerText = validmsg;
        }
      });
      break;

    case 'mail':
      inputName.addEventListener('input', function (e) {
        let field = e.target.parentElement;
        let value = e.target.value;
        let feed = field.querySelector('.feed');
        let msgBackend = field.querySelector('.msg-error');
        let msg = null;
        let validmsg = field.querySelector('.feed-valid');
        if (!validator.isEmail(value)) {
          feed.style.display = 'flex';
          msg = 'No es un email valido';
          setRedBorder(inputName);
          msghandler(feed, msgBackend, value);
        } else {
          validmsg = 'El campo es correcto';
          setGreenBorder(inputName);
          msghandler(feed, msgBackend, value);
        }
        if (msg) {
          field.classList.remove('valid');
          field.classList.add('invalid');
          feed.innerText = msg;
        } else {
          field.classList.remove('invalid');
          field.classList.add('valid');
          feed.innerText = validmsg;
        }
      });
      break;

    case 'passwd':
      inputName.addEventListener('input', function (e) {
        let field = e.target.parentElement;
        let value = e.target.value;
        let feed = field.querySelector('.feed');
        let msgBackend = field.querySelector('.msg-error');
        let msg = null;
        let validmsg = field.querySelector('.feed-valid');
        let config = {
          minLength: 8,
          minLowercase: 2,
          minUppercase: 2,
          minNumbers: 1,
          minSymbols: 1,
        };
        if (!validator.isLength(value, { min: 8 })) {
          feed.style.display = 'flex';
          msg = 'La contraseña debe contener mínimo 8 caracteres';
          setRedBorder(inputName);
          msghandler(feed, msgBackend, value);
        } else if (!validator.isStrongPassword(value, config)) {
          feed.style.display = 'flex';
          msg = `La contraseña debe tener al menos:
          2 mayúsculas
          2 minúsculas
          1 número 
          1 carácter especial`;
          setRedBorder(inputName);
          msghandler(feed, msgBackend, value);
        } else {
          validmsg = 'El campo es correcto';
          setGreenBorder(inputName);
          msghandler(feed, msgBackend, value);
        }

        if (msg) {
          feed.innerText = msg;
          field.classList.remove('valid');
          field.classList.add('invalid');
        } else {
          field.classList.remove('invalid');
          field.classList.add('valid');
          feed.innerText = validmsg;
        }
      });
      break;

    case 'img':
      inputName.addEventListener('input', function (e) {
        let imageBackground = document.querySelector('.image-fields-container');
        let field = e.target.parentElement;
        let files = e.target.files;
        let feed = field.querySelector('.feed-img');
        let msgBackend = field.querySelector('.msg-error-img');
        let msg = null;
        let validmsg = field.querySelector('.feed-valid');
        if (files.length == 0) {
          feed.style.display = 'flex';
          msg = 'El campo de avatar esta vacio';
          setRedBackground(imageBackground);
          msghandler(feed, msgBackend, files);
        } else if (
          !['jpg', 'jpeg', 'png', 'gif'].includes(files[0].type.split('/')[1])
        ) {
          feed.style.display = 'flex';
          msg = 'Formato inválido';
          setRedBackground(imageBackground);
          msghandler(feed, msgBackend, files);
        } else {
          validmsg = 'El campo es correcto';
          setGreenBackground(imageBackground);
          msghandler(feed, msgBackend, files);
        }
        if (msg) {
          field.classList.remove('valid');
          field.classList.add('invalid');
          feed.innerText = msg;
        } else {
          field.classList.remove('invalid');
          field.classList.add('valid');
          feed.innerText = validmsg;
        }
      });
      break;
  }
};

//IMAGE PREVIEW FUNCTION
const loadFile = function (event) {
  var output = document.querySelector('.preview');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};
//BACKEDN VALIDATION HANDLER
const msghandler = function (feed, msgBackend, value) {
  if (window.getComputedStyle(feed).display === 'none') {
    feed.style.display = 'flex';
  }
  setTimeout(() => {
    feed.style.display = 'none';
  }, 3000);
  if (msgBackend && value.length == 0) {
    msgBackend.style.display = 'flex';
    feed.style.display = 'none';
    setTimeout(() => {
      msgBackend.style.display = 'none';
    }, 2000);
  } else if (msgBackend) {
    msgBackend.style.display = 'none';
  }
};
//SET BORDER HANDLER
const setRedBorder = function (input) {
  return (input.style.borderBottom = '3px solid hsla(4, 72%, 50%, 1)');
};
const setGreenBorder = function (input) {
  return (input.style.borderBottom = '3px solid #7cc6b0');
};
const setRedBackground = function (input) {
  return (input.style.backgroundColor = 'hsla(4, 72%, 50%, 1)');
};
const setGreenBackground = function (input) {
  return (input.style.backgroundColor = '#7cc6b0');
};
