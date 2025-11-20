export default class Extras{
    #precio;
    #anio;
  
    constructor(precio, anio) {
      
      this.precio = precio;
      this.anio = anio;
    }
  
    get precio() {
      return this.#precio;
    }
  
    get anio() {
      return this.#anio;
    }
  
    set precio(nuevoPrecio) {
      if (typeof nuevoPrecio !== "number") {
        throw new Error(
          `Error: ${nuevoPrecio}. El precio debe ser de tipo numero`
        );
      }
      this.#precio = nuevoPrecio;
    }
  
    set anio(nuevoAnio) {
      if (typeof nuevoAnio !== "number") {
        throw new Error(
          `Error: ${nuevoAnio}. El año debe ser de tipo numero`
        );
      }
  
      if (nuevoAnio < 2000 || nuevoAnio > 2025) {
          throw new Error(`Error: ${nuevoAnio}. el año debe ser entre 2000 o 2025`);
      }
      this.#anio = nuevoAnio;
    }
  
    toString() {
      return ` 
              Precio:${this.#precio},
              Año:${this.#anio},`;
      }
  }