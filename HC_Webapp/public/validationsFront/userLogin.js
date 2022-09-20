let forms = document.forms.news     /* traer formularios */;

let inputs = forms.elements      /* traer los inputs de formularios */;

inputs.userName.addEventListener('input', function (e) {     /* userName no obligatorio */
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');        /* Variable validmsg seleccionando el elemento .feed-valid ya que el "valid" no me me tomaba el elemento, ni msj  ni el css) */
    if (!validator.isLength(value, { min: 2 })) {
        msg = 'El nombre de usuario debe contener mínimo dos caracteres.'
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

inputs.passwd.addEventListener('focus', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    if (validator.isEmpty(value)) {
        msg = 'La contraseña es obligatoria.'
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
}
);

   
 //VALIDA 8 CARACTERES EN EL PASSWD
 
 inputs.passwd.addEventListener('input', function (e) {
        let field = e.target.parentElement;
        let value = e.target.value;
        let feed = field.querySelector('.feed');
        let msg = null;
        let validmsg = field.querySelector('.feed-valid');
        let config = {
            minLength: 8, minLowercase: 2, minUppercase: 2, minNumbers: 1, minSymbols: 1
        }      
        //Variable validmsg seleccionando el elemento .feed-valid ya que el "valid" no me me tomaba el elemento, ni msj  ni el css) 
        if (!validator.isLength(value, { min: 8 })) {
            msg = 'El nombre debe contener mínimo ocho caracteres.'
        } else if (!validator.isStrongPassword(value, config)) {
            msg = 'El nombre debe 2 letras mayúsculas, 2 minúsculas, un número y un carácter especial.'
        } else {
            validmsg = 'El campo es correcto.'
        }
    
        if (msg) {
            feed.innerText = msg
        } else {
            field.classList.remove('invalid');
            field.classList.add('valid');
            feed.innerText = validmsg
        }
    
});



