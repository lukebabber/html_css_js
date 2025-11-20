function cargarTituloYP(){

    //H1

    //Creamos una variable que recoge el elemento por id formulario
    const oDivTitulo= document.getElementById("formulario");
    
    //Creamos una variable que crea un elemento h1 
    const oH1Titulo = document.createElement("h1");
    //Voy a añadir a al variable oDivTitulo(padre) la variable oH1Titulo(hijo)
    oDivTitulo.appendChild(oH1Titulo);
    
    //Creamos una variable que crea un texto
    const oH1TituloTexto= document.createTextNode("Loguea en tu cuenta");
    //Voy a añadir a al variable oH1Titulo(padre) la variable oH1TituloTexto(hijo)
    oH1Titulo.appendChild(oH1TituloTexto);

    //P
    //Creamos una variable que crea un elemento p 
    const oP = document.createElement("p");
    //Voy a añadir a al variable oDivTitulo(padre) la variable oP(hijo)
    oDivTitulo.appendChild(oP);

    //Creamos una variable que crea un texto
    const oPTexto= document.createTextNode("¿No tienes una cuenta? ");
    //Voy a añadir a al variable oP(padre) la variable oPTexto(hijo)
    oP.appendChild(oPTexto);
    
    //Creamos una variable que crea un elemento a
    const oPA = document.createElement("a");
    //Voy a añadir el atributo href al elemento oPA
    oPA.setAttribute("href", "registrar.html");
    //Voy a añadir a al variable oP(padre) la variable oPA(hijo)
    oP.appendChild(oPA);

    //Creamos una variable que crea un texto
    const oPATexto= document.createTextNode("Registrate");
    //Voy a añadir a al variable oPA(padre) la variable oPATexto(hijo)
    oPA.appendChild(oPATexto);
}

function cargarFormulrio(){
    //Creamos una variable que recoge el elemento por id formulario
    const oDivFormulario= document.getElementById("formulario");

    //Creamos una variable que crea un elemento form 
    const oFormFormulario = document.createElement("form");
    //Voy a añadir a al variable oDivFormulario(padre) la variable oFormFormulario(hijo)
    oDivFormulario.appendChild(oFormFormulario);

    //Creamos una variable que crea un elemento label 
    const oDivFormularioLabel = document.createElement("label");
    oDivFormularioLabel.setAttribute("for", "email");
    //Creamos una variable que crea un texto
    const oDivFormularioLabelTexto= document.createTextNode("Email");
    //Voy a añadir a al variable oDivFormularioLabel(padre) la variable oDivFormularioLabelTexto(hijo)
    oDivFormularioLabel.appendChild(oDivFormularioLabelTexto);
    //Voy a añadir a al variable oDivFormulario(padre) la variable oDivFormularioLabel(hijo)
    oDivFormulario.appendChild(oDivFormularioLabel);

    //Creamos una variable que crea un elemento br 
    const obr1 = document.createElement("br");
    oDivFormulario.appendChild(obr1);

    //Creamos una variable que crea un elemento input 
    const oDivFormularioInput = document.createElement("input");
    oDivFormularioInput.setAttribute("type","text");
    oDivFormularioInput.setAttribute("id","email");
    oDivFormularioInput.setAttribute("name","email");
    oDivFormularioInput.setAttribute("value","");
    oDivFormularioInput.setAttribute("pattern","(?=.*[@]).{1,30}");
    oDivFormularioInput.setAttribute("required","");
    //oDivFormularioInput.setAttribute("oninvalid","this.setCustomValidity('Incluye un signo &#x22;@&#x22; en la dirección de correo electrónico.')");
    //oDivFormularioInput.setAttribute("oninput","setCustomValidity('')");
    //Voy a añadir a al variable oDivFormulario(padre) la variable oDivFormularioInput(hijo)
    oDivFormulario.appendChild(oDivFormularioInput);

    //Creamos una variable que crea un elemento br 
    const obr2 = document.createElement("br");
    oDivFormulario.appendChild(obr2);


    //Creamos una variable que crea un elemento label 
    const oDivFormularioLabel2 = document.createElement("label");
    oDivFormularioLabel.setAttribute("for", "contrasena");
    //Creamos una variable que crea un texto
    const oDivFormularioLabe2Texto= document.createTextNode("Contraseña");
    //Voy a añadir a al variable oDivFormularioLabel2(padre) la variable oDivFormularioLabel2Texto(hijo)
    oDivFormularioLabel2.appendChild(oDivFormularioLabe2Texto);
    //Voy a añadir a al variable oDivFormulario(padre) la variable oDivFormularioLabel2(hijo)
    oDivFormulario.appendChild(oDivFormularioLabel2);

    //Creamos una variable que crea un elemento br 
    const obr3 = document.createElement("br");
    oDivFormulario.appendChild(obr3);

    //Creamos una variable que crea un elemento input 
    const oDivFormularioInput2 = document.createElement("input");
    oDivFormularioInput2.setAttribute("type","password");
    oDivFormularioInput2.setAttribute("id","contrasena");
    oDivFormularioInput2.setAttribute("name","contrasena");
    oDivFormularioInput2.setAttribute("value","");
    oDivFormularioInput2.setAttribute("pattern","(.{1,9}");
    oDivFormularioInput2.setAttribute("required","");
    //oDivFormularioInput2.setAttribute("oninvalid","this.setCustomValidity('La contraseña debe contener 9 caracteres como máximo')");
    //oDivFormularioInput2.setAttribute("oninput","setCustomValidity('')");
    //Voy a añadir a al variable oDivFormulario(padre) la variable oDivFormularioInput2(hijo)
    oDivFormulario.appendChild(oDivFormularioInput2);

    //Creamos una variable que crea un elemento br 
    const obr4 = document.createElement("br");
    oDivFormulario.appendChild(obr4);


    //Creamos una variable que crea un elemento label 
    const oDivFormularioInput3 = document.createElement("input");
    oDivFormularioInput3.setAttribute("type","submit");
    oDivFormularioInput3.setAttribute("value","Enviar");
    //Voy a añadir a al variable oDivFormulario(padre) la variable oDivFormularioInput3(hijo)
    oDivFormulario.appendChild(oDivFormularioInput3);
    
}


window.addEventListener("load", () => {

    cargarTituloYP(),
    cargarFormulrio()
    
  });