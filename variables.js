"use strict";
var number1 = 10;
var number2 = "10";
var b2 = true;
console.log(number1);
var objeto2 = {
    propiedad1: "valor1",
    propiedad2: "valor2"
};
var object1 = {
    name: "John",
    age: 30
};
var miArreglo = [];
var miArreglo2 = [1, 2, 3, 4, 5];
var miArreglo3 = [1, 2, 3, 4, 5];
var miArreglo4 = ["1", "2", "3", "4", "5"];
var Genero;
(function (Genero) {
    Genero[Genero["Masculino"] = 0] = "Masculino";
    Genero[Genero["Femenino"] = 1] = "Femenino";
})(Genero || (Genero = {}));
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 0] = "Lunes";
    Dias[Dias["Martes"] = 1] = "Martes";
    Dias[Dias["Miercoles"] = 2] = "Miercoles";
    Dias[Dias["Jueves"] = 3] = "Jueves";
    Dias[Dias["Viernes"] = 4] = "Viernes";
    Dias[Dias["Sabado"] = 5] = "Sabado";
    Dias[Dias["Domingo"] = 6] = "Domingo";
})(Dias || (Dias = {}));
console.log(object1);
console.log(objeto2);
console.log(Genero.Masculino);
console.log(Genero[1]);
console.log(Dias.Lunes);
console.log(Dias[2]);
var userName = "Fchia";
var htmlText = "<a href = ''/>";
var texto2 = `Hola ${userName} como estas?`;
console.log(texto2);
console.log(number1 == 10);
//Objetos
for (var item in object1) {
    console.log(item + " : " + object1[item]);
}
//Destructuracion de Arreglos
var cursos = ["Angular", "React", "TypeScript", "JS", "Nest"];
var [curso1, curso2, curso3, curso4, curso5] = cursos;
console.log(curso1);
console.log(curso3);
//Destructuracion de Objetos
var persona = {
    nombre: "Luke",
    apellido: "Chia",
    edad: 5
};
var { nombre, apellido, edad } = persona;
console.log(nombre + " : " + apellido + " : " + edad);
// Arreglos
var arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arreglo1.slice(0, 5));
console.log(arreglo1.slice(5));
//Interfaces
//Clases
