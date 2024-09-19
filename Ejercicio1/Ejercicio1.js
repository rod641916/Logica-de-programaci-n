/**Imprimir la tabla de multiplicar de un numero dado*/



////////////////////Resultado mio/////////////////
function tablaMutiplicar(numero){
    for(let i=1; i<=10; i++){
        console.log(`${i} * ${numero} = ${i * numero}`);
    }
    return(tablaMutiplicar)
}

tablaMutiplicar(5);

//console.log("**************Funcion de curso************")

module.exports = tablaMutiplicar

////////////////Resultado de curso////////////////////////
function tablaMutiplicar1(numero){
    let resultado=`#Tabla del numero ${numero} #\n`;

    for(let i=1; i<=10; i++){
        let multiplicacion = (i * numero);
        resultado+= `${i} x ${numero} = ${multiplicacion}\n`
    }
    return resultado;
}

//console.log(tablaMutiplicar1(5));