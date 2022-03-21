//funcionSuma sin parámetros. La suma se hace por argumentos
let resultado = funcionSuma(1, 3, 55, 5);
console.log(resultado);

function funcionSuma() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i] // suma = suma + arguments[i]
    }
    return suma;
}

//Paso por referencia
const Persona = {

}