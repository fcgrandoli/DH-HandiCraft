let forms = document.forms.news;

let inputs = forms.elements;

inputs.userName.addEventListener('input', function (e) {
  let field = e.target.parentElement;
  let value = e.target.value;
  let feed = field.querySelector('.feed');
  let msgBackend = field.querySelector('.msg-error');
  let msg = null;
  let validmsg = field.querySelector('.feed-valid');
  if (!validator.isLength(value, { min: 5 })) {
    feed.style.display = 'flex';
    msg = 'El nombre de usuario debe contener mínimo cinco caracteres.';
    msghandler(feed, msgBackend, value);
  } else {
    validmsg = 'El campo es correcto.';
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
