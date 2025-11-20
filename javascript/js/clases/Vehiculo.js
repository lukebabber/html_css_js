import Extras from "./Extras.js";
export default class Vehiculo extends Extras{
    #id;
    #tipo;
    #nombre;
    

    constructor(precio, anio,id,tipo, nombre ) {
        super(precio, anio);
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        
        
    }

    get id() {
      return this.#id;
    }

    get tipo() {
        return this.#tipo;
    }

    get nombre() {
        return this.#nombre;
    }

    set tipo(nuevoTipo) {
        if (!["Coche", "Moto"].includes(nuevoTipo)) {
          throw new Error(
            `Error: ${nuevoTipo}. El tipo debe ser de tipo Coche o Moto`
          );
        }
        this.#tipo = nuevoTipo;
    }

    set nombre(nuevoNombre) {
        if (typeof nuevoNombre !== "string") {
          throw new Error(
            `Error: ${nuevoNombre}. El nombre debe ser de tipo string`
          );
        }
        this.#nombre = nuevoNombre;
    }

    set id(nuevoid) {
      this.#id = nuevoid;
    }

    toString() {
        return `
        ${super.toString()}
            Id: ${this.#id},
            Tipo: ${this.#tipo},
            Nombre: ${this.#nombre}
        `;
    }
}







