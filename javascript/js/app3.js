// Formulario.
const formulario = document.getElementsByTagName("form")[0];

formulario.addEventListener("submit", (eventoSubmit) => {
    //Evitar el comportamiento por defecto del evento
    eventoSubmit.preventDefault();

    if(validarEmail() & validarContrasena() & validarNombre() & validarApellido() & validarSexo() & validarDni() & validarVehiculos()){

    }
});

// Campos del formulario.
const campoEmail = document.getElementById("email");
const campoContrasena = document.getElementById("contrasena");
const campoSexo = document.getElementById("sexo");
const campoNombre = document.getElementById("nombre");
const campoApellido = document.getElementById("apellido");
const campoDni = document.getElementById("dni");
const campoVehiculos = document.getElementsByName("vehiculos[]");

// "div" de error de cada campo.
const divErrorEmail = document.getElementById("email_error");
const divErrorContrasena = document.getElementById("contrasena_error");
const divErrorSexo = document.getElementById("sexo_error");
const divErrorNombre = document.getElementById("nombre_error");
const divErrorApellido = document.getElementById("apellido_error");
const divErrorDni = document.getElementById("dni_error");
const divErrorVehiculos = document.getElementById("vehiculos_error");

//Funciones para validar cada campo.
function validarEmail() {

    const expresionRegular = /^(?=.*[@]).{1,30}$/;

    //variable que contiene el valor del campo username
    const email = campoEmail.value;

    //variable que sirve para validar la variable usernameUsuario
    const validado = expresionRegular.test(email);

    //variable que contiene el mensaje de error
    const mensajeError = ` El email debe contener una arroba (@)`;

    //LLamamos a la función notificarValidación
    notificarValidacion(validado, divErrorEmail, mensajeError, campoEmail);
    
    //Devolvemos el resultado de validado true o false
    return validado;

}

function validarContrasena() {
    const contrasena = campoContrasena.value;
    const validado = contrasena !="" & contrasena.length <=9;
    

    //variable que contiene el mensaje de error
    const mensajeError = ` La contraseña debe contener como max 9 caracteres`;

    //LLamamos a la función notificarValidación
    notificarValidacion(validado, divErrorContrasena, mensajeError, campoContrasena);

    return validado;
}

function validarNombre() {
    const nombre = campoNombre.value;
    const validado = nombre !="" & nombre.length <=20;
    

    //variable que contiene el mensaje de error
    const mensajeError = ` El nombre debe contener como max 20 caracteres`;

    //LLamamos a la función notificarValidación
    notificarValidacion(validado, divErrorNombre, mensajeError, campoNombre);

    return validado;
}

function validarApellido() {
    const apellido = campoApellido.value;
    const validado = apellido !="" & apellido.length <=40;
    

    //variable que contiene el mensaje de error
    const mensajeError = ` El apellido debe contener como max 40 caracteres`;

    //LLamamos a la función notificarValidación
    notificarValidacion(validado, divErrorApellido, mensajeError, campoApellido);

    return validado;
}

function validarSexo() {
    const sexo = campoSexo.value;
    const validado = sexo =="hombre" | sexo =="mujer";
    

    //variable que contiene el mensaje de error
    const mensajeError = ` El sexo debe ser hombre o mujer`;

    //LLamamos a la función notificarValidación
    notificarValidacion(validado, divErrorSexo, mensajeError, campoSexo);

    return validado;
}

function validarDni() {
    const expresionRegular = /^[0-9]{8}[A-Za-z]{1}$/;
    const NIE_REGEX = /^[XYZ]\d{7}[A-Za-z]{1}$/;
    const dni = campoDni.value;
    //variable que sirve para validar la variable usernameUsuario
    const validado = expresionRegular.test(dni) | NIE_REGEX.test(dni);
    

    //variable que contiene el mensaje de error
    const mensajeError = ` El dni o nie no esta correcto`;

    //LLamamos a la función notificarValidación
    notificarValidacion(validado, divErrorDni, mensajeError, campoDni);

    return validado;
}

function validarVehiculos() {
    //variable validado donde al principio debe ser false porque no hemos marcado la casilla
    let validado = false;

    //Si el campo terms es marcado pues la variable validado pasa a ser true
    if (campoVehiculos[0].checked) {
        validado = true;
        
    }

    
    //variable que contiene el mensaje de error
    const mensajeError = `Debe aceptar los términos y condiciones.`;
    //LLamamos a la función notificarValidación
    notificarValidacion(validado, divErrorVehiculos, mensajeError, campoVehiculos[0]);
    //Devolvemos el resultado de validado true o false
    return validado;
}






/*Función para notificar la validación al usuario.
validado para ver si la validación es verdad o no
divError el campo error de la página html
mensaje contiene el mensaje de error
campos el campo del html
*/
function notificarValidacion(validado, divError, mensaje, ...campos) {
    //Si validado no es verdad añade el mensaje error a la página html
    if (!validado) {
        if (campos.length !== undefined) {
            campos.forEach((campo) => campo.classList.add("field-error"));
        }else {
            campos[0].classList.add("field-error");
        }
        divError.innerHTML = mensaje;
    //Si validado es verdad elimina el mensaje error a la página html
    }else {
        if (campos.length !== undefined) {
            campos.forEach((campo) => campo.classList.remove("field-error"));
        }else {
            campos[0].classList.remove("field-error");
        }
        divError.innerHTML = "";
    }
}
