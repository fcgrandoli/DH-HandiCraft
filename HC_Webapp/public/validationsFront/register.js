let forms = document.forms.news     /* traer formularios */;

let inputs = forms.elements      /* traer los inputs de formularios */;

/* empezar a utilizarlo en los formularios, empezamos con el name */
inputs.firstName.addEventListener('focus', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    if (validator.isEmpty(value)) {
        msg = 'El nombre no puede quedar vacío.'
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
}
)




inputs.firstName.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');        /* Variable validmsg seleccionando el elemento .feed-valid ya que el "valid" no me me tomaba el elemento, ni msj  ni el css) */
    if (!validator.isLength(value, { min: 2 })) {
        msg = 'El nombre debe contener mínimo dos caracteres.'
    }
    else {
        validmsg = 'El campo es correcto.'
    }
    if (msg) {
        feed.innerText = msg
    } else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }

})

inputs.lastName.addEventListener('focus', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    if (validator.isEmpty(value)) {
        msg = 'El apellido no puede quedar vacío.'
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
}
)




inputs.lastName.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');        /* Variable validmsg seleccionando el elemento .feed-valid ya que el "valid" no me me tomaba el elemento, ni msj  ni el css) */
    if (!validator.isLength(value, { min: 2 })) {
        msg = 'El apellido debe contener mínimo dos caracteres.'
    }
    else {
        validmsg = 'El campo es correcto.'
    }
    if (msg) {
        feed.innerText = msg
    } else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }

})
/*   userName dejarlo para lo ultimo, no es olbigatorio
userName.addEventListener('focus', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    if (validator.isEmpty(value)) {
        msg = 'El usuario no puede quedar vacío.'
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
}
)

userName.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');         Variable validmsg seleccionando el elemento .feed-valid ya que el "valid" no me me tomaba el elemento, ni msj  ni el css) 
    if (!validator.isLength(value, { min: 3 })) {
        msg = 'El nombre de usuario debe contener mínimo tres caracteres.'
    }
    else {
         validmsg = 'El campo es correcto.'
    }
    if (msg) {
        feed.innerText = msg
    } else {
        field.classList.remove('invalid');
        field.classList.add('valid');
        feed.innerText = validmsg
    }
    
    });           */
    inputs.email.addEventListener('focus', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    if (validator.isEmpty(value)) {
        msg = 'El email es obligatorio.'
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    }
}
);





inputs.email.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');
    if (!validator.isEmail(value)) {
        msg = 'No es un email valido.'
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

});




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




inputs.passwd.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let value = e.target.value;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');  
    let config = {
        minLength: 8, minLowercase: 2, minUppercase: 2, minNumbers: 1, minSymbols: 1
    }      /* Variable validmsg seleccionando el elemento .feed-valid ya que el "valid" no me me tomaba el elemento, ni msj  ni el css) */
    if (!validator.isLength(value, { min: 8 })) {
        msg = 'El nombre debe contener mínimo ocho caracteres.'
    } else if (!validator.isStrongPassword(value, config))  {
        msg = 'El nombre debe 2 letras mayúsculas, 2 minúsculas, un número y un carácter especial.'
    }else {
        validmsg = 'El campo es correcto.'
    }
    
    if (msg) {
        feed.innerText = msg
    } else
    {
            field.classList.remove('invalid');
            field.classList.add('valid');
            feed.innerText = validmsg
        }});



/* Seguir con en el avatar */

inputs.avatar.addEventListener('input', function (e) {
    let field = e.target.parentElement;
    let files = e.target.files;
    let feed = field.querySelector('.feed');
    let msg = null;
    let validmsg = field.querySelector('.feed-valid');
    if(files.length == 0){
        msg = 'El campo de avatar esta vacio.' 
    }
   else if (!['jpg', 'jpeg', 'png', 'gif'].includes(files[0].type.split('/')[1])) {
        msg = 'No es un formato de imagen valida.'
    } else {
        validmsg = 'El campo es correcto.'
    }
    if (msg) {
        field.classList.remove('valid');
        field.classList.add('invalid');
        feed.innerText = msg
    } else {
        feed.innerText = validmsg
    }
})



/* forms.addEventListener('submit', function (e) {
    e.preventDefault();
    let isCorrect = false

    if (e.target.querySelectorAll('.field.valid').length === 1 ) {
        isCorrect = true
    }

    if (isCorrect) {
        e.target.sumbit()
    } else {
        Swal.fire({
            title: 'OJO!!',
            text: 'Volve y completa todos los campos.',
            imageUrl: 'https://thumbs.dreamstime.com/b/emoji-emoticon-pulling-his-finger-one-lower-eyelid-further-down-meaning-alertness-be-watchful-you-do-not-fool-me-my-eye-168543578.jpg',
            imageWidth: 1000,
            imageHeight: 500,
            imageAlt: 'Custom image',
        })
    }
}) */      // No es obligatorio, si sobra tiempo hacerlo, como el userName.






