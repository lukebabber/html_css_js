//Variables
let nombre = prompt("Introduzca tu nombre:");

let edad = 25;
console.log(nombre);

//Operador condicional
/*
let h = edad < 40 ? "Todavia eres joven porque tienes " + edad + " años." : "Eres mayor porque tienes " + edad + " años.";  
console.log(h);*/

//If
if(edad < 40){
    console.log("Todavia eres joven porque tienes " + edad + " años.");
}else{
    console.log("Eres mayor porque tienes " + edad + " años.")
}

//Switch
switch(true){
    case (edad < 3):
        console.log("Eres un bebe con " + edad + " años.");
        break;
    case (edad < 12):
        console.log("Eres un niño con " + edad + " años.");
        break;
    case (edad < 18):
        console.log("Eres un niño grande con " + edad + " años.");
        break;
    case (edad < 40):
        console.log("Eres un hombre joven con " + edad + " años.");
        break;
    case (edad < 65):
        console.log("Eres un hombre con experiencia con " + edad + " años.");
        break;
    case (edad >= 65):
        console.log("Eres un hombre mayor con " + edad + " años.");
        break;
    
}

//while
/*
let i = 1;
while(i <=10){
    console.log("Dentro de " + i + " año tendras " + (edad + i) + " años");
    i++;
}*/

//do-while
/*
let i = 1;
do{
    console.log("Dentro de " + i + " año tendras " + (edad + i) + " años");
    i++;
}while(i <=10);
*/

//For
for(let i=1; i <=10; i++){
    console.log("Dentro de " + i + " año tendras " + (edad + i) + " años");
}

function suma(num1,num2){
    console.log(num1+num2);
}
suma(1,2);







