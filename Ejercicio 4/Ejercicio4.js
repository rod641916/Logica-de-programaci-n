//////Mi codigo//////

function invertir(cadena){
    let cadenaInvertida = "";

    for(let i=cadena.length - 1; i>=0; i--){
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

console.log(invertir("hola"));


///////Codigo curso////////