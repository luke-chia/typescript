var number1: number = 10;
var number2:string = "10";

var b2:boolean = true;

console.log(number1);

var objeto2:any = {
    propiedad1: "valor1",
    propiedad2: "valor2"
}

var object1: { name: string, age: number } = {
    name: "John",
    age: 30
};


var miArreglo = [];
var miArreglo2: number[] = [1, 2, 3, 4, 5];
var miArreglo3: Array<number> = [1, 2, 3, 4, 5];
var miArreglo4: Array<string> = ["1", "2", "3", "4", "5"];

enum Genero {
    Masculino,
    Femenino
}

enum Dias {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

console.log(object1);
console.log(objeto2);
console.log(Genero.Masculino);
console.log(Genero[1]);

console.log(Dias.Lunes);
console.log(Dias[2]);

var userName:string = "Fchia";
var htmlText = "<a href = ''/>"
var texto2 = `Hola ${userName} como estas?`;

console.log(texto2);
console.log(number1==10);

//Objetos
for(var item in object1){
    console.log(item + " : " + object1[item as keyof typeof object1]);
}

//Destructuracion de Arreglos
var cursos: Array<string> = ["Angular", "React", "TypeScript", "JS", "Nest"];

var [curso1, curso2, curso3, curso4, curso5] = cursos;

console.log(curso1);
console.log(curso3);

//Destructuracion de Objetos
var persona: {nombre:string, apellido:string, edad:number} = {
    nombre: "Luke",
    apellido: "Chia",
    edad: 5
}

var {nombre, apellido, edad} = persona;
console.log(nombre + " : " + apellido + " : " + edad);

// Arreglos
var arreglo1: number[] = [1, 2, 3, 4, 5,6,7,8,9,10];

console.log(arreglo1.slice(0, 5));
console.log(arreglo1.slice(5));



//Interfaces

//Clases

