let btnAgregar = document.getElementById('btnAgregar');
let btnClear = document.getElementById('btnClear');

let txtNombre = document.getElementById('Name');
let txtNumber = document.getElementById('Number');

let alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
let alertValidaciones = document.getElementById('alertValidaciones');


function validarCantidad() {
    if(txtNumber.value.length == 0){
        return false;
    } //if length
    return true
} //validarCantidad

btnAgregar.addEventListener('click', function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML = '';
    alertValidaciones.style.display = 'none';
    txtNumber.style.border = ''
    txtNombre.style.border = ''
    
    if (txtNombre.value.length < 2 ){
        alertValidacionesTexto.innerHTML = 'El <strong> NOMBRE </strong> no es correcto <br>';
        alertValidaciones.style.display = 'block';
        txtNombre.style.border = 'solid red medium'
    }
    if(! validarCantidad()){
        alertValidacionesTexto.innerHTML += 'La <strong> CANTIDAD </strong> no es correcta';
        alertValidaciones.style.display = 'block';
        txtNumber.style.border = 'solid red medium'
    }
})

btnClear.addEventListener('click', function(event){
    event.preventDefault();
    txtNombre.value = '';
    txtNumber.value = '';

})