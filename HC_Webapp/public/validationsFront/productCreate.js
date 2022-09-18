let forms = document.forms.news ;

let inputs = forms.elements;


inputs.name.addEventListener('input', function (e) { 
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    if (!validator.isLength(value, { min: 5 })) {
        msg = 'El nombre debe contener mínimo cinco caracteres.'
    } else {
        validmsg = 'El campo es correcto.'
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
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');      
    if (!validator.isLength(value, { min: 20 })) {
        msg = 'La descripcion larga debe contener mínimo veinte caracteres.'
    } else {
        validmsg = 'El campo es correcto.'
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
inputs.avatar.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let files = e.target.files;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');
    if (files.length == 0) {
        msg = 'El campo de avatar esta vacio.'
    }
    else if (!['jpg', 'jpeg', 'png', 'gif'].includes(files[0].type.split('/')[1])) {
        msg = 'No es un formato de imagen valida.'
    } else {
        validmsg = 'El campo es correcto'
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

    
    
    
    
    
    
    
    
    
    
    
   

