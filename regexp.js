"use strict";
// regular expresion to validate cell number
let cellNumberRegExp = /[0-9]{10}/;
let cellNumber = "9511040291";
if (cellNumber.match(cellNumberRegExp)) {
    console.log("El número de celular es válido");
}
else {
    console.log("El número de celular no es válido");
}
let passwordRegExp = /(?=.*[-,_$])(?=.*[A-Z])\w{4,10}/;
let password = "1Perr@";
if (password.match(passwordRegExp)) {
    console.log("La contraseña es válida");
}
else {
    console.log("La contraseña no es válida");
}
;
//([0-9])+([A-Z])+([-_@])+
