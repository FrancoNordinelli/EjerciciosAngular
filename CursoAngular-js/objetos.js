let persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 28,
    nombreCompleto: function() {
        //this funciona como apuntador a el objeto persona que se ejecuta 
        //y que contiene los atributos nombre y apellido
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Carlos';
console.log(persona2.nombre);

console.log(persona2['nombre']);

//for in
for (Nombrepropiedad in persona) {
    console.log(Nombrepropiedad);
    console.log(persona[Nombrepropiedad]);
}

//Agregar y eliminar propiedades
persona.tel = '1233123';
delete persona.tel;

//impresión de objetos en navegador
//1) imprimir todas las propiedades
console.log(persona.nombre + ' ' + persona.nombreCompleto());
//2)iterar con for in
for (Nombrepropiedad in persona) {
    console.log(persona[Nombrepropiedad]);
}
//3)array
let personaArray = Object.values(persona);
console.log(personaArray);
//json
let personaString = JSON.stringify(persona);
console.log(personaString);