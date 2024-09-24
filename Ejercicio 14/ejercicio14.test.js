const repetir = require ("./Ejercicio14");

test ("Repite una palabra la cantidad que se le diga", () =>{
    expect(repetir ("HOLA",2)).toEqual("HOLAHOLA");
})