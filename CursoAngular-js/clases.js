class Persona {
    //no se puede acceder a los static a través de los objetos
    static contadorObjetosPersona = 0;
    email = 'valor default'; //atributo estático que se asocia con esta platilla. Pueden acceder objetos
    static get MAX_OBJ() {
        return 4;
    }
    constructor(nombre, apellido) { //atributos de plantilla
        this._nombre = nombre;
        this._apellido = apellido;
        //this.contadorObjetosPersona++ no funciona, ya que this se usa para el objeto
        //que se está ejecutando, y daría NaN porque la nueva variable en el objeto 
        //no está definida como un número
        Persona.contadorObjetosPersona < Persona.MAX_OBJ ? this.idPersona = ++Persona.contadorObjetosPersona :
            console.log('Supero el maximo');
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(n) {
        return this._nombre = n;
    }
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
    toString() {
        return 'id--->' + ': ' + this.idPersona + ' ' + this.nombreCompleto();
    }
}

let p1 = new Persona('Juan', 'Perez');
let p2 = new Persona('otra', 'persona');
let p3 = new Persona('Mica', 'Perez');
console.log(p1.toString());
console.log(p2);
console.log(p1.nombre); //get
p1.nombre = 'oSanti'; //set
console.log(p1.nombre);
console.log(p2);
console.log(p3);
class Empleado extends Persona {
    constructor(nombre, apellido, dep) {
        super(nombre, apellido)
        this._dep = dep;
    }
    get departamento() {
        return this._dep;
    }
    set departamento(d) {
            this._dep = d;
        }
        //Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._dep;
    }
    static saludar() {
        console.log('Saludos desde static');
    }
    static saludar2(persona) {
        console.log(persona._nombre);
    }
}

let empleado = new Empleado('Maria', 'Fernandez', 'Sistemas');
console.log(empleado);
console.log(empleado.nombreCompleto());
//En navegador, los console anteriores escriben object Object si no hay sobreescritura de toString
console.log(empleado.toString());
//empleado.saludar(); no se puede llamar desde un objeto a una funcion static
Empleado.saludar();
Empleado.saludar2(p1);

console.log(p1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(p1.email);
console.log(Persona.email);
console.log(Persona.contadorObjetosPersona);

let p4 = new Persona('Eduardo', 'Nordinelli');
let p5 = new Persona('Gimena', 'Capristo');
let p6 = new Persona('Roxana', 'Martinez');
console.log(p4);
console.log(p5);