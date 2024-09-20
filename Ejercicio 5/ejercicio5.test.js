const porcentaje = require("./Ejercicio5");

test("Test para calcular los porcentajes de un numero dado",()=>{
    expect(porcentaje(50,800)).toBe(400);
    expect(porcentaje(25,200)).toBe(50);
    expect(porcentaje(10,150)).toBe(15);
});