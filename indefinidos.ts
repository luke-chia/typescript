// A declared variable that has not been assigned a value is undefined by default

function holaInd(saludo:string, ...numero:number[]):string {

    console.log(typeof saludo);
    console.log(typeof numero);

    return "Hola";
}


console.log(holaInd("Lukin"));


var esNulo = function(value:any): boolean {
    return !value && typeof value === "object"
} 

var esNumerico = function(value:any): boolean {
    return !isNaN(value);
}


console.log(esNulo(null));
console.log(esNulo(undefined));

console.log(esNulo("test"));

const mightBeNaN = NaN // NaN means "Not-a-Number"
console.log("10 es un Numerico: " + esNumerico(10)) // true
console.log("Fchia es un Numerico: " + esNumerico("fchia")) // true

//Symbolos
const mySymbol = Symbol('property of object')
const mySymbol2 = Symbol('property of object')


console.log("-- comparacion de simbolos 1 --");  
console.log(mySymbol.toString() === mySymbol2.toString()); // 


const myObject:{ [key: symbol]: string } = {
    [mySymbol]: 'This is the value'
}

console.log(myObject[mySymbol]); // 'This is the value'

const sharedSymbol = Symbol.for('shared symbol')
const sameSharedSymbol = Symbol.for('shared symbol')

console.log("-- comparacion de simbolos 2 --");  
console.log(sharedSymbol.toString() === sameSharedSymbol.toString()); // true
console.log(sharedSymbol.toString);

const mySymbol1 = Symbol();

console.log(mySymbol1);

// Uso de Symbolos en Objetos

const symbolID = Symbol.for('id');

interface Developer {
    [symbolID]: number;
    nombre: string;
    lenguajes: string[];
}

const developer: Developer = {
    [symbolID]: 100,
    nombre: 'Francisco Chia',
    lenguajes: ["JavaScript", "TypeScript", "Java", "React", "Solidity"],
}

console.log("--------------------------------- \n");
console.log("Propiedades con un For In");

for(let key in developer){
    console.log(`${key}: ${developer[key as keyof Developer]}`);
}

console.log("--------------------------------- \n");
console.log("Propiedades con Stringify");

console.log(JSON.stringify(developer));

console.log("--------------------------------- \n");
console.log("Propiedades Symbol con getOwnPropertySymbols");

Object.getOwnPropertySymbols(developer).forEach(function(key){
    console.log(`${key.toString()}: ${developer[key as keyof Developer]}`);
});

console.log("--------------------------------- \n");
console.log("Propiedad del Symbol del ID");
console.log(developer[symbolID]);


function myFunction(developer:Developer):void {
    const symbolID = Symbol.for('id');
    const llave = Symbol.keyFor(symbolID);
    
    console.log("Llave: " + llave);
    console.log(symbolID);
}   

myFunction(developer);

// Manejo de Objetos
var miObjeto: { [key: string]: any, [sym: symbol]: any } = {}; 
const sym: symbol = Symbol.for("test");
const sym2: symbol = Symbol.for("test2");


miObjeto['foo'] = 'foo'; 
miObjeto['barra'] = 'barra'; 
miObjeto[2] = 2;
miObjeto[sym] = 'baz';
miObjeto[sym2] = 'baz2';


console.log(miObjeto); 
console.log(sym in miObjeto);