
const impares = require("./Ejercicio7");

test("Determinar la cantidad de numeros impares que hay entre 2 numeros",()=>{
   expect(impares(1,10)).toEqual(5); 
});