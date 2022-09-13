window.addEventListener('load', function(){ 
    let formulario = document.querySelector('form.fields');

formulario.addEventListener('submit', function(evento){
    let errores = [];
let nombre = document.querySelector('input.name');
if (nombre.value == ""){
    errores.push('el campo de nombre no puede estar vacio')}

else if (nombre.value.length < 5){
    errores.push('el campo tiene que tener minimo 5 caracteres')}

let descripcion = document.querySelector('input.descLarge')
if (descripcion.value.length < 20){
    errores.push('el campo tiene que tener minimo 20 caracteres')}

   /* let images = document.querySelector('input.image-upload')
if (descripcion.value.length == 'jpg'){
    alert('la foto puede ser unicamente en formato .....')}*/
    if(errores.length > 0){
        evento.preventDefault(); 

        let ulErrores = document.querySelector('div.errores ul')
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
        }
    }
})
}
)


