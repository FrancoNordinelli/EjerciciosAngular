//Tipos de datos
//String
var nombre = "Franco";
console.log(nombre);

//Numerico
var numero = 1000;
console.log(numero);

//Las variables son dinámicas.
nombre = 12;
console.log(nombre);

//Objeto
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "34343433"
}
console.log(objeto)
    //Typeof es para ver el tipo de dato de una variable
console.log(typeof objeto)

//Booleano
var bandera = true;

//Funcion(tipo de dato)
function miFuncion() {}
//Funciones de tipo Expresion
let f = function(a, r) {
    console.log(arguments);
    return a + r + arguments[2]
};
console.log(f(3, 4, 5));
console.log(f(2));
//Self Invoking Function (No se pueden reutilizar)
(function(a, x) {
    console.log("Ejecutando" + ' ' + (a + x));
})(3, 5);
//Arrow Function
const funcionFlecha = (n, n2) => n - n2;
console.log(funcionFlecha(3, 2));

//Symbol
var simbolo = Symbol();
console.log(typeof simbolo);

//Clase
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona)

//undefined
var x;
console.log(x);
//null = ausencia de valor;
var y = null;
console.log(typeof y);
console.log(typeof x);

//Arrays
var autos = ['BMW', 12.2, true];
console.log(autos);
console.log(typeof autos);
//push y para agregar un elemento
autos.push('nuevoValor');
//tambien
autos[autos.length] = "otroAuto";
console.log(autos);
//Empty
var z = '';
console.log(z);
console.log(typeof z);