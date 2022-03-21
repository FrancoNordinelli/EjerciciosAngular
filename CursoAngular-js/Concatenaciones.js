//Concatenaciones
var nombre = 'Juan';
var apellido = 'Perez';
var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
//Si se concatenan tipos de datos diferentes
//la variable toma el tipo del primer tipo de dato
//Esto es un ejemplo de context String
var nombreCompleto2 = 'Juan' + ' ' + 1 + 23;
console.log(nombreCompleto2);
console.log(typeof nombreCompleto2);
//() para concatenar y sumar
var x = nombre + (12 + 3);
console.log(x);
x = 1 + 3 + nombre;
console.log(x);