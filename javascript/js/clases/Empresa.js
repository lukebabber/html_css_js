import Extras from "./Extras.js";
import Vehiculo from "./Vehiculo.js";
export default class Empresa{
    #empresa;
    #localidad;
    #vehiculos = [];
  
    constructor(empresa, localidad) {
        this.#empresa = empresa;
        this.#localidad = localidad;
    }
  
    get empresa() {
        return this.#empresa;
    }
    set empresa(nuevoEmpresa) {
        this.#empresa = nuevoEmpresa;
    }
  
    get localidad() {
        return this.#localidad;
    }
    set localidad(nuevoLocalidad) {
        this.#localidad = nuevoLocalidad;
    }
  
    get vehiculos() {
        return this.#vehiculos;
    }
  
    agregarVehiculo(nuevoVehiculo) {
  
      if (!nuevoVehiculo instanceof Vehiculo) {
        throw new Error(`Error. El objeto introducido debe ser de tipo Vehiculo`);
      }
  
      if (
        this.#vehiculos.some(
          (vehiculo) => nuevoVehiculo.id === vehiculo.id
        )
      ) {
        throw new Error(
          `Error en el id: ${nuevoVehiculo.id}. Ya hay un vehiculo con ese id.`
        );
      }
  
      this.#vehiculos.push(nuevoVehiculo);
  
    }
  
    eliminarVehiculo(id){
      const indice = this.#vehiculos.findIndex(
        (vehiculo) => vehiculo.id == id
      );
      if (indice === -1) {
        throw new Error(
          `Error en el id: ${id}. No hay ningún vehiculo con ese id.`
        );
      }
      this.#vehiculos.splice(indice, 1);
    }
  
    ordenarPorId() {
      this.#vehiculos.sort((c1, c2) => c2.id - c1.id);
    }
  
    obtenerVehiculosPorPrecio(min, max) {
      return this.#vehiculos.filter(
        (vehiculo) => vehiculo.precio >= min && vehiculo.precio <= max
      );
    }
  
    obtenerVehiculosPorTipo() {
      const vehiculos = [];
      vehiculos[0] = [];
      vehiculos[1] = [];
      for (let i = 0; i < this.#vehiculos.length; i++) {
        const vehiculo = this.#vehiculos[i];
        switch (vehiculo.tipo) {
          case "Coche":
            vehiculos[0].push(vehiculo);
            break;
          case "Moto":
            vehiculos[1].push(vehiculo);
            break;
        }
      }
      return vehiculos;
    }
  
    toString() {
        return `
                Empresa: ${this.#empresa},
                Localidad: ${this.#localidad}
                Vehiculos: ${this.#vehiculos.join("")}
            `;
    }
  }
