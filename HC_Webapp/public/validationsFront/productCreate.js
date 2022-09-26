let forms = document.forms.news ;

let inputs = forms.elements;


inputs.name.addEventListener('input', function (e) { 
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msgBackend = field.querySelector('.msg-error');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid'); 
    if (!validator.isLength(value, { min: 5 })) {
        feed.style.display = 'flex';
        msg = 'Este campo debe contener mínimo cinco caracteres'
    } else {
        validmsg = 'El campo es correcto.'
        setTimeout(() => {
            feed.style.display = 'none';
          }, 2000);
        if(msgBackend){
            msgBackend.classList.add('hide')
        }
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
        
    }
    else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }

})

inputs.descShort.addEventListener('input', function (e) {     
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msgBackend = field.querySelector('.msg-error');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');      
    if (!validator.isLength(value, { min: 10 })) {
        feed.style.display = 'flex';
        msg = 'Este campo debe contener mínimo 10 caracteres'
    } else {
        validmsg = 'El campo es correcto.'
        setTimeout(() => {
            feed.style.display = 'none';
          }, 2000);
        if(msgBackend){
            msgBackend.classList.add('hide')
        }
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
    else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }

})

inputs.descLarge.addEventListener('input', function (e) {     
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msgBackend = field.querySelector('.msg-error');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');      
    if (!validator.isLength(value, { min: 20 })) {
        feed.style.display = 'flex';
        msg = 'Este campo debe contener mínimo 20 caracteres'
    } else {
        validmsg = 'El campo es correcto.'
        setTimeout(() => {
            feed.style.display = 'none';
          }, 2000);
        if(msgBackend){
            msgBackend.classList.add('hide')
        }
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
    else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }

})

inputs.price.addEventListener('input', function (e) {     
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msgBackend = field.querySelector('.msg-error');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');      
    if (!validator.isLength(value, { min: 1 })) {
        feed.style.display = 'flex';
        msg = 'Este campo debe contener mínimo 1 caracter'
    } else {
        validmsg = 'El campo es correcto.'
        setTimeout(() => {
            feed.style.display = 'none';
          }, 2000);
        if(msgBackend){
            msgBackend.classList.add('hide')
        }
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
    else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }

})
inputs.image.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let files = e.target.files;
    let feed = field.querySelector('.feed');
    let msgBackend = field.querySelector('.msg-error');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');
    if (files.length == 0) {
        feed.style.display = 'flex';
        msg = 'El campo de imagen está vacio'
    }
    else if (!['jpg', 'jpeg', 'png', 'gif', 'webp','svg'].includes(files[0].type.split('/')[1])) {
        msg = 'No es un formato de imagen valida'
    } else {
        validmsg = 'El campo es correcto'
        setTimeout(() => {
            feed.style.display = 'none';
          }, 2000);
        if(msgBackend){
            msgBackend.classList.add('hide')
        }
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    } else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }
})

    
    
    
    
    
    
    
    
    
    
    
   

