////Invertir un numero

////Mi codigo////

function invertirnum(num){
    let numeroinvertido=num.toString().split('').reverse().join("");
    return parseInt(numeroinvertido);
}

console.log(invertirnum(56))


////Codigo curso////

function invertirNumero(numero){
    let invertido = parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);// La función sign detecta que signo se está pasando
    return invertido
}

console.log(invertirNumero (78));