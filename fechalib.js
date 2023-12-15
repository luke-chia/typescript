let fechaActual = new Date();
console.log(fechaActual);
function formateaFecha(fecha, locale) {
    return fecha.getFullYear() + "-" +
        ("0" + (fecha.getMonth() + 1)).slice(-2) + "-" +
        ("0" + (fecha.getDate())).slice(-2);
}
function creaFecha(fecha) {
    let fechaArray = fecha.split("-");
    return new Date(Number(fechaArray[0]), Number(fechaArray[1]), Number(fechaArray[2]));
}
export { formateaFecha, creaFecha };
