function arrays(array1,array2){

    //Filtre crea un nuevo array nuevo con los elementos que cumplan una condición, inclues devuelve un verdadero o falso al comparar
    const filtrado = array1.filter(elemento => {return array2.includes(elemento)});
    // Se declara la constante filtrado, se le asigna array1 a quien se le aplica la propiedad filtre
    // Elemento hace referencia a cada valor individual del array1 
    return filtrado
}
console.log(arrays([4,6,2,8,9] , [5,7,0,1,9,4,2]));