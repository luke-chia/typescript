import dateFormat from 'dateformat';
function formateaFecha(fecha, locale) {
    return fecha.getFullYear() + "-" +
        ("0" + (fecha.getMonth() + 1)).slice(-2) + "-" +
        ("0" + (fecha.getDate())).slice(-2);
}
function creaFecha(fecha) {
    let fechaArray = fecha.split("-");
    return new Date(Number(fechaArray[0]), Number(fechaArray[1]), Number(fechaArray[2]));
}
var estudiante = {
    id: 1,
    nombre: "Luke",
    apellidoPaterno: "Chia",
    apellidoMaterno: "Salinas",
    fechaNacimiento: creaFecha("2018-11-26"),
    display: function () {
        console.log(this.id + " : " + this.nombre + " : " + this.apellidoPaterno + " : " +
            this.apellidoMaterno + " : " + formateaFecha(this.fechaNacimiento, "sp-MX"));
        //+ " : " + dateFormat(this.fechaNacimiento, "yyyy-mm-dd"));
    }
};
console.log(estudiante.display());
var sumaFn;
sumaFn = function (x, y) {
    return x + y;
};
console.log(sumaFn(10, 5));
var auto = {
    color: "Rojo",
    numeroPuertas: 4,
    asientos: 4,
    materialAsientos: "Piel",
    quemacocos: true,
    marca: "Ford",
    modelo: "Mustang",
    anio: 1969
};
console.log(dateFormat(new Date("1979-01-11"), "yyyy-mm-dd"));
