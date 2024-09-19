/*Calcular el porcentaje de un numero*/

/////////////Mi codigo///////////////
function porcentaje(porcentaje,numero){
    let operation= ((porcentaje*numero)/100)

    console.log(`El ${porcentaje}% de ${numero} es: ${operation}`);
}

porcentaje(50,800);


////////////////codigo curso///////////

function tantoPorCiento(porcen, num){
    let operacion=(num* (porcen/100))
    let resultado=console.log(operacion)

    return resultado;
}

console.log(tantoPorCiento(43,897))