/////// Dividir un array en la cantidad de arrayas que se le solicite

function dividirArrays(array, cantidad){
    let arreglos = [];

    for(let elemento of array){

        let ultimo = arreglos[arreglos.length-1];

        if(!ultimo || ultimo.length === cantidad){
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento);
        }
        
    }
    return arreglos
}

console.log(dividirArrays([7,8,9,1,2,3,8],4))