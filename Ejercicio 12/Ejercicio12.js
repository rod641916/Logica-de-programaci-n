/////Dado un numero, hacer una cuenta regresiva de 8 en 8 hasta 0

////Mi codigo
function regresar(numero){

    for(let i= numero; i >=0; i-=8){
        console.log("No= "+i);
    }
    return numero
}

regresar (40)


/////Codigo curso//////

function hastaCero(num){
    let resultado = `--- Del ${num} al 0 --- \n`;

    while(num > 0){
        resultado += `-n° ${num} \n`
        num -= 8;
    }
    resultado += "----FIN----"

    return resultado;
}

console.log(hastaCero(100))