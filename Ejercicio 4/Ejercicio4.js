//////Mi codigo//////

/*function invertir(cadena){
    let cadenaInvertida = "";

    for(let i=cadena.length - 1; i>=0; i--){
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

console.log(invertir("hola"));*/


///////Codigo curso////////

function invertir2(texto){
    let invertido="";

    for(let letra of texto){
        invertido = letra + invertido;
    }
    return invertido;
}

console.log("Texto invertido:"+ invertir2("Rodrigo"));