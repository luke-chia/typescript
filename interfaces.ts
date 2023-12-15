import dateFormat from 'dateformat';
import { masks } from 'dateformat';

interface IEstudiante {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: Date;
    display(): void;
}


function formateaFecha(fecha:Date, locale:String):string{

    return fecha.getFullYear() + "-" +
            ("0"+ (fecha.getMonth()+1)).slice(-2) + "-" +
            ("0"+ (fecha.getDate())).slice(-2);

}

function creaFecha(fecha:string):Date{
    let fechaArray = fecha.split("-");
    return new Date(Number(fechaArray[0]), Number(fechaArray[1]), Number(fechaArray[2]));
}


var estudiante: IEstudiante = {
    id: 1,
    nombre: "Luke",
    apellidoPaterno: "Chia",
    apellidoMaterno: "Salinas",
    fechaNacimiento: creaFecha("2018-11-26"),
    display: function(){
        console.log(this.id + " : " + this.nombre + " : " + this.apellidoPaterno + " : " +
                    this.apellidoMaterno + " : " + formateaFecha(this.fechaNacimiento, "sp-MX")) ;
                    //+ " : " + dateFormat(this.fechaNacimiento, "yyyy-mm-dd"));
    }
}

console.log(estudiante.display());

interface ISuma {
    (x:number, y:number):number;
}

var sumaFn: ISuma;

sumaFn = function(x:number, y:number):number{
    return x+y;
}

console.log(sumaFn(10,5));

//Interfaces extendidas
interface IExterior {
    color: string;
    numeroPuertas: number;
}

interface IInterior {
    asientos: number;
    materialAsientos: string;
    quemacocos: boolean;
}

interface IVehiculo extends IExterior, IInterior {
    marca: string;
    modelo: string;
    anio: number;
}

var auto: IVehiculo = {
    color: "Rojo",
    numeroPuertas: 4,
    asientos: 4,
    materialAsientos: "Piel",
    quemacocos: true,
    marca: "Ford",
    modelo: "Mustang",
    anio: 1969
}

console.log(dateFormat(new Date("1979-01-11"), "yyyy-mm-dd"));
