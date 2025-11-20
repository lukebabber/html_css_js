const intervalo = setInterval(mostrarTiempo, 1000);

function mostrarTiempo(){
    const date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let año = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    //Mostrar tiempo en el documento.
    const pTiempo = document.getElementById("tiempo");
    pTiempo.innerText = dia + "/" + mes + "/" + año + " " + hora + ":" + minutos + ":" + segundos;

    

}


