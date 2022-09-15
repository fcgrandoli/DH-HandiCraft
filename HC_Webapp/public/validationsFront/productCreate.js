window.addEventListener('load', function(){ 
    let formulario = document.querySelector('form.fields');

formulario.addEventListener('submit', function(evento){
    

let nombre = document.querySelector('input.name');
if (nombre.value == ""){
    msg('el campo de nombre no puede estar vacio')}

else if (nombre.value.length < 5){
   msg('el campo tiene que tener minimo 5 caracteres')}

let descripcion = document.querySelector('input.descLarge')
if (descripcion.value.length < 20){
    msg('el campo tiene que tener minimo 20 caracteres')}

    if (!['jpg', 'jpeg', 'png', 'gif'].includes(files[0].type.split('/')[1])){
        msg('No es un formato valido')
    }

})
}
)


