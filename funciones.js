"use strict";
function hola(saludo) {
    return "Hola1" + saludo;
}
console.log(hola("Lukin"));
//Parametros Opcionales
function display(id, name, role) {
    console.log("ID:", id);
    console.log("Name:", name);
    if (role != undefined) {
        console.log("Role:", role);
    }
}
display(378, "Fchia", "Admin");
display(123, "Luke");
//Parametros Default
function displayDefault(id, name, role = "Default") {
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Role:", role);
}
displayDefault(132, "Leia");
//Parametros tipo Funcion
function suma(a, b) {
    return a + b;
}
function calculadora(funcion) {
    console.log(funcion(10, 5));
}
calculadora(suma);
//Function returning Function
function devuelveOperacion() {
    return function (number1, number2) {
        return number1 + number2;
    };
}
var operacion = devuelveOperacion();
console.log(operacion(10, 3));
var saludo = function (name) {
    return "Hola2" + name;
};
console.log(saludo("Andrea Salinas"));
// Sobrecarga de Funciones
function doble(valor) {
    if (typeof valor == "number") {
        return valor * 2;
    }
    else if (typeof valor == "string") {
        return valor + " " + valor;
    }
    else if (typeof valor == "boolean") {
        return !valor;
    }
    else if (typeof valor == "object" && Array.isArray(valor)) {
        return valor.map(element => { return element * 2; });
    }
}
console.log(doble(10));
console.log(doble("20"));
console.log(doble([1, 2, 3, 4, 5]));
//Funcion Parametros Variabels
function productoVariable(...valores) {
    //return valores.reduce((total, numero) => total + numero);
    var resultado = 1;
    for (var i = 0; i < valores.length; i++) {
        resultado *= valores[i];
    }
    return resultado;
}
function productoReduce(...valores) {
    return valores.reduce((total, numero) => total * numero);
}
console.log(productoVariable(1, 2, 3, 4, 5));
console.log(productoReduce(1, 2, 3, 4, 5));
