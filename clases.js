import { formateaFecha, creaFecha } from "./fechalib.js";
class Persona {
    nombre;
    apellidoPaterno;
    apellidoMaterno;
    fechaNacimiento;
    constructor(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.fechaNacimiento = fechaNacimiento;
    }
    toString() {
        console.log("To String from Persona");
        return this.nombre + "\n" + this.apellidoPaterno + "\n" +
            this.apellidoMaterno + "\n" + this.fechaNacimiento;
    }
}
class Passenger extends Persona {
    static idiomaDefault = "Spanish";
    numeroViajeroFrecuente;
    _id = 0;
    constructor(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, numeroViajeroFrecuente) {
        super(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
        this.numeroViajeroFrecuente = numeroViajeroFrecuente;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    display() {
        console.log(this.nombre + " : " + this.apellidoPaterno + " : " +
            this.apellidoMaterno + " : " + this.fechaNacimiento + " : " +
            this.numeroViajeroFrecuente + " : " + this.id);
    }
    toString() {
        console.log("To String from Passenger");
        return this.nombre + " :: " + this.apellidoPaterno + " :: " +
            this.apellidoMaterno + " :: " + formateaFecha(this.fechaNacimiento, "");
    }
}
class Estudiante extends Persona {
    static idiomaDefault = "Spanish";
    numeroAlumno;
    _id = 0;
    constructor(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, numeroViajeroFrecuente) {
        super(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
        this.numeroAlumno = numeroViajeroFrecuente;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    display() {
        console.log(this.nombre + " : " + this.apellidoPaterno + " : " +
            this.apellidoMaterno + " : " + formateaFecha(this.fechaNacimiento, "") + " : " +
            this.numeroAlumno + " : " + this.id);
    }
    toString() {
        console.log("To String from Alumno");
        return this.nombre + " :: " + this.apellidoPaterno + " :: " +
            this.apellidoMaterno + " :: " + formateaFecha(this.fechaNacimiento, " ");
    }
}
var pasajero = new Passenger("luke", "chia", "salinas", creaFecha("2018-11-26"), 123456789);
pasajero.id = 100;
pasajero.display();
console.log(Passenger.idiomaDefault);
// Clase para definir una Calculadora
class Calculadora {
    static suma(num1, num2) {
        return num1 + num2;
    }
    static resta(num1, num2) {
        return num1 - num2;
    }
    static multiplicacion(num1, num2) {
        return num1 * num2;
    }
    static division(num1, num2) {
        return num1 / num2;
    }
}
console.log(Calculadora.suma(10, 5));
// Ejemplo e Polimorfismo
var personas = [new Passenger("luke", "chia", "salinas", creaFecha("2018-11-26"), 123456789),
    new Estudiante("leia", "chia", "salinas", creaFecha("2021-08-13"), 1981320014)];
personas.forEach((persona) => {
    console.log(persona.toString());
});
//Parseint
var numero1 = "10";
console.log(parseInt(numero1) + 3);
console.log(parseFloat(numero1) + 3);
