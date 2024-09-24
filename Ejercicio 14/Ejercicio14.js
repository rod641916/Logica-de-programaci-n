// Dado un string y un número, repetir el string tantas veces como el numero indique

function repetir(palabra,cantidad){
    let cadena = '';
    for(let i= 0; i < cantidad; i++){
        cadena += palabra;
    }
    return cadena;
}
//console.log(repetir ("Hola",15));
module.exports = repetir;

function repiteme(texto, numero_repeticiones){
    let resultado ="";

    for(let i=0; i<numero_repeticiones; i++){
        resultado += texto;
    }
    return resultado;
}

console.log(repiteme("Perro", 2))