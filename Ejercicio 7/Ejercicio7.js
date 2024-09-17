/////Mi codigo////

function impares(num1,num2){
    let contador=0;

    for(let i=num1; i<=num2; i++){
        if (i%2 !== 0){
            contador++;
        }
    }
    return contador;
}

console.log("La tantidad de numeros impares es:",impares(1,10))



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