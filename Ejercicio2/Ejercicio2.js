function polindromo(texto){
    let textoNormal= texto.toLowerCase();
    let textoInverso= textoNormal.split("").reverse().join("");

    if(textoNormal==textoInverso){
        return true;
    }else{
        return false;
    }
}

console.log(polindromo("Otto"))

