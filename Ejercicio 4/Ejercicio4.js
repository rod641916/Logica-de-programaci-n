/*Invertir una cadena de texto*/

//////Mi codigo//////

function invertir(cadena){
    let cadenaInvertida = "";

    for(let i=cadena.length - 1; i>=0; i--){
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}
module.exports = invertir;
//console.log(invertir("hola"));


///////Codigo curso////////

/*function invertir2(texto){
    let invertido="";

    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido;
}

console.log("Texto invertido:"+ invertir2("Rodrigo"));*/