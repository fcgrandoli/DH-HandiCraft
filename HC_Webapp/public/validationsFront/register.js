let forms = document.forms.news;

let inputs = forms.elements;

inputs.firstName.addEventListener('input', function (e) {
  let field = e.target.parentElement;
  let value = e.target.value;
  let feed = field.querySelector('.feed');
  let msgBackend = field.querySelector('.msg-error');
  let msg = null;
  let validmsg = field.querySelector('.feed-valid');
  if (!validator.isLength(value, { min: 5 })) {
    feed.style.display = 'flex';
    msg = 'El nombre debe contener mínimo cinco caracteres.';
    setRedBorder(inputs.firstName);
    msghandler(feed, msgBackend, value);
  } else {
    validmsg = 'El campo es correcto';
    setGreenBorder(inputs.firstName);
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

inputs.lastName.addEventListener('input', function (e) {
  let field = e.target.parentElement;
  let value = e.target.value;
  let feed = field.querySelector('.feed');
  let msgBackend = field.querySelector('.msg-error');
  let msg = null;
  let validmsg = field.querySelector('.feed-valid');
  if (!validator.isLength(value, { min: 5 })) {
    feed.style.display = 'flex';
    msg = 'El nombre debe contener mínimo cinco caracteres.';
    setRedBorder(inputs.lastName);
    msghandler(feed, msgBackend, value);
  } else {
    validmsg = 'El campo es correcto';
    setGreenBorder(inputs.lastName);
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

inputs.userName.addEventListener('input', function (e) {
  let field = e.target.parentElement;
  let value = e.target.value;
  let feed = field.querySelector('.feed');
  let msgBackend = field.querySelector('.msg-error');
  let msg = null;
  let validmsg = field.querySelector('.feed-valid');
  if (!validator.isLength(value, { min: 5 })) {
    feed.style.display = 'flex';
    msg = 'El usuario debe contener mínimo cinco caracteres.';
    setRedBorder(inputs.userName);
    msghandler(feed, msgBackend, value);
  } else {
    validmsg = 'El campo es correcto';
    setGreenBorder(inputs.userName);
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

inputs.email.addEventListener('input', function (e) {
  let field = e.target.parentElement;
  let value = e.target.value;
  let feed = field.querySelector('.feed');
  let msgBackend = field.querySelector('.msg-error');
  let msg = null;
  let validmsg = field.querySelector('.feed-valid');
  if (!validator.isEmail(value)) {
    feed.style.display = 'flex';
    msg = 'No es un email valido.';
    setRedBorder(inputs.email);
    msghandler(feed, msgBackend, value);
  } else {
    validmsg = 'El campo es correcto';
    setGreenBorder(inputs.email);
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

inputs.passwd.addEventListener('input', function (e) {
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
    msg = 'La contraseña debe contener mínimo ocho caracteres.';
    setRedBorder(inputs.name);
    msghandler(feed, msgBackend, value);
  } else if (!validator.isStrongPassword(value, config)) {
    feed.style.display = 'flex';
    msg =`La contraseña debe tener:
    2 mayúsculas
    2 minúsculas
    1 número 
    1 carácter especial`;
      setRedBorder(inputs.passwd);
      msghandler(feed, msgBackend, value);
  } else {
    validmsg = 'El campo es correcto';
    setGreenBorder(inputs.passwd);
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

inputs.avatar.addEventListener('input', function (e) {
  let imageBackground = document.querySelector('.image-fields-container');
  let field = e.target.parentElement;
  let files = e.target.files;
  let feed = field.querySelector('.feed');
  let msgBackend = field.querySelector('.msg-error');
  let msg = null;
  let validmsg = field.querySelector('.feed-valid');
  if (files.length == 0) {
    feed.style.display = 'flex';
    msg = 'El campo de avatar esta vacio.';
    setRedBackground(imageBackground);
    msghandler(feed, msgBackend, files);
  } else if (
    !['jpg', 'jpeg', 'png', 'gif'].includes(files[0].type.split('/')[1])
  ) {
    feed.style.display = 'flex';
    msg = 'No es un formato de imagen valida.';
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