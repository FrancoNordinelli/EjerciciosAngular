function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 34);
console.log(padre);
let madre = new Persona('Maria', 'Gimenez', 33);
console.log(madre);
console.log(padre.nombreCompleto());

// agregar una propiedad
Persona.prototype.tel;
padre.tel = '12232';
console.log(padre);
console.log(madre);
madre.tel = '2';
console.log(madre.tel);