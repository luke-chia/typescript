
import { formateaFecha, creaFecha } from "./fechalib.js";

interface IDisplay {
    display(): void;
}

class Persona {

    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: Date;

    constructor(nombre:string,
                apellidoPaterno:string, 
                apellidoMaterno:string,
                fechaNacimiento:Date){

        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.fechaNacimiento = fechaNacimiento;
    }

    toString():string{
        console.log("To String from Persona");
        return this.nombre + "\n" + this.apellidoPaterno + "\n" +                    
                    this.apellidoMaterno + "\n" + this.fechaNacimiento;

    }

}


class Passenger extends Persona implements IDisplay {

    public static readonly idiomaDefault: string = "Spanish";

    public numeroViajeroFrecuente: number;
    private _id: number = 0;

    constructor(nombre:string,
                apellidoPaterno:string, 
                apellidoMaterno:string,
                fechaNacimiento:Date,
                numeroViajeroFrecuente:number){

        super(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
        this.numeroViajeroFrecuente = numeroViajeroFrecuente;
    }
    
    get id():number{
        return this._id;
    }

    set id(id:number){      
        this._id = id;
    }      

    display():void{
        console.log(this.nombre + " : " + this.apellidoPaterno + " : " +                    
                    this.apellidoMaterno + " : " + this.fechaNacimiento + " : " +
                    this.numeroViajeroFrecuente + " : " + this.id);
    }

    toString():string{
        console.log("To String from Passenger");
        return this.nombre + " :: " + this.apellidoPaterno + " :: " +                    
                    this.apellidoMaterno + " :: " + formateaFecha(this.fechaNacimiento, "");
    }

}

class Estudiante extends Persona implements IDisplay {

    public static readonly idiomaDefault: string = "Spanish";

    public numeroAlumno: number;
    private _id: number = 0;

    constructor(nombre:string,
                apellidoPaterno:string, 
                apellidoMaterno:string,
                fechaNacimiento:Date,
                numeroViajeroFrecuente:number){

        super(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);
        this.numeroAlumno = numeroViajeroFrecuente;
    }
    
    get id():number{
        return this._id;
    }

    set id(id:number){      
        this._id = id;
    }      

    display():void{
        console.log(this.nombre + " : " + this.apellidoPaterno + " : " +                    
                    this.apellidoMaterno + " : " + formateaFecha(this.fechaNacimiento, "") + " : " +
                    this.numeroAlumno + " : " + this.id);
    }

    toString():string{
        console.log("To String from Alumno");
        return this.nombre + " :: " + this.apellidoPaterno + " :: " +                    
                    this.apellidoMaterno + " :: " + formateaFecha( this.fechaNacimiento, " ")    ;
    }

}

var pasajero = new Passenger("luke", "chia", "salinas", creaFecha("2018-11-26"), 123456789);
pasajero.id = 100;
pasajero.display();


console.log(Passenger.idiomaDefault);


// Clase para definir una Calculadora
class Calculadora {

    static suma(num1:number, num2:number):number{
        return num1 + num2;
    }

    static resta(num1:number, num2:number):number{
        return num1 - num2;
    }

    static multiplicacion(num1:number, num2:number):number{
        return num1 * num2;
    }

    static division(num1:number, num2:number):number{
        return num1 / num2;
    }

}

console.log(Calculadora.suma(10,5));

// Ejemplo e Polimorfismo
var personas:Persona[] = [new Passenger("luke", "chia", "salinas", creaFecha("2018-11-26"), 123456789),
                          new Estudiante("leia", "chia", "salinas", creaFecha("2021-08-13"), 1981320014)];

personas.forEach((persona) => {
    console.log(persona.toString());
});

//Parseint
var numero1:string = "10";

console.log(parseInt(numero1) + 3);
console.log(parseFloat(numero1) + 3);

