import Extras from "./Extras.js";
import Vehiculo from "./Vehiculo.js";
import Empresa from "./Empresa.js";
import vehiculos from "./datosJSON.js";

//Uso de clases.
let empresa;
try{
    empresa = new Empresa("AutosEs","Fuentes de Andalucía");
    document.getElementById("nombreEmpresa").textContent = empresa.empresa;
    document.getElementById("localidad").textContent = empresa.localidad;

    vehiculos.forEach((dato) => {
        const vehiculo = new Vehiculo(
          dato.precio,
          dato.anio,
          dato.id,
          dato.tipo,
          dato.nombre
        );
        empresa.agregarVehiculo(vehiculo);
      });
}catch (error) {
    console.error(`
          Error capturado:
              Nombre: ${error.name},
              Mensaje: ${error.message},
              Pila: ${error.stack}
      `);
  }

function mostrar(vehiculos) {
    const divContainer = document.getElementById("vehiculos-container");
  
    divContainer.innerHTML = ``;
  
    vehiculos.forEach((vehiculo) => {
      divContainer.innerHTML += `
          <div class="vehiculo">
              <p>${vehiculo.id}</p>
              <p><span class="bold">Nombre</span>: ${vehiculo.nombre}</p>
              <p><span class="bold">Tipo</span>: ${vehiculo.tipo}</p>
              <p><span class="bold">Año</span>: ${vehiculo.anio}</p>
              <p><span class="bold">Precio</span>: ${vehiculo.precio}</p>
          </div>
      `;
    });
}

function mostrarTodos() {
    mostrar(empresa.vehiculos);
  }
document.getElementById("mostrarTodos").onclick = mostrarTodos;


function ordenarPorId() {
    empresa.ordenarPorId();
    mostrar(empresa.vehiculos);
  }
  document.getElementById("ordenarPorId").onclick = ordenarPorId;


function mostrarPorPrecio() {
    let preciomin = prompt("Introduzca un precio min:");
    let preciomax = prompt("Introduzca un precio max:");
    const vehiculosPorPrecio = empresa.obtenerVehiculosPorPrecio(preciomin, preciomax);
    mostrar(vehiculosPorPrecio);
}
  document.getElementById("mostrarPorPrecio").onclick = mostrarPorPrecio;

  function mostrarCoches() {
    const coches = empresa.obtenerVehiculosPorTipo()[0];
    mostrar(coches);
  }

  document.getElementById("mostrarCoches").onclick = mostrarCoches;