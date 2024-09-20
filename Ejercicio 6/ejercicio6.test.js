const { default: expect } = require("expect")
const cuadrado= require ("./Ejercicio6")

test ("Regresa una cuadrado con la cantidad de asteriscos que se le indica",()=>{
    const resultadoEsperado=[
        "***",
        "* *",
        "***"
    ];
    expect(cuadrado(3)). toEqual(resultadoEsperado);
})