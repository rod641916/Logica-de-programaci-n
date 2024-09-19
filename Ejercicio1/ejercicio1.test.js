const { default: expect } = require("expect");
const tablaMutiplicar = require("./Ejercicio1")
const multiplicar = require("./Ejercicio1")

test ("Este test comprueba si la funcion de tablamultiplicar funciona",()=>{
    expect(multiplicar).toBeDefined();
});

test ("Tabla completa", ()=>{
    expect (multiplicar(10))
});