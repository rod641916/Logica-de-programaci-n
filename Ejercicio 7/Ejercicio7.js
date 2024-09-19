/////Contrar la cantidad de numeros impares que hay entrer 2 numeros

/////Mi codigo////

function impares(num1,num2){ //Función con 2 parametros
    let contador=0; //contador iniciado en 0
 
    for(let i=num1; i<=num2; i++){//bucle para recorrer los numero que se le pasen
        if (i%2 !== 0){ //Si el residuo es diferente a 0
            contador++; // aumenta el contador
        }
    }
    return contador; // me regresa el contador
}

console.log("La cantidad de numeros impares es:",impares(1,10)) //se pasan los valores y se imprime



////Codigo curso////

function impares2(numero1,numero2){
    let contador = 0;

    while(numero1<numero2){
        if(numero1%2 !== 0) contador ++

        numero1++;
    }
    return contador;
}

console.log("numeros impares:",impares2(1,100))