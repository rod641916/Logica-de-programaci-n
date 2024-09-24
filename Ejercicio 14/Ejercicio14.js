// Dado un string y un número, repetir el string tantas veces como el numero indique

function repetir(palabra,cantidad){
    let cadena = '';
    for(let i= 0; i < cantidad; i++){
        cadena += palabra;
    }
    return cadena;
}
console.log(repetir ("Hola",15));

module.exports = repetir;