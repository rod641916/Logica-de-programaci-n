/*Detectar si una palabra es un palindromo */

//////////////////Mi funcion////////////////////
function polindromo(texto){
    let textoNormal= texto.toLowerCase();
    let textoInverso= textoNormal.split("").reverse().join("");

    if(textoNormal==textoInverso){
        return true;
    }else{
        return false;
    }
}

//console.log(polindromo("Otto"))
module.exports = polindromo;


console.log("**********Funcion del curso****************")
////////////////////Funcion del curso//////////////////
function palindromo1(texto){
    let invertido = texto.split(' ').reverse().join('');
    if(invertido===texto){
        return true;
    }else{
        return false;
    }
}

//console.log("Es un palindromo? - " + palindromo1("Otto"));