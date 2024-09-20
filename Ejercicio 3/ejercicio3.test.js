
const coincidencias= require ("./Ejercicio3");

test("Test para saber si hay coincidencia de palabra en el texto", () => {
    expect(coincidencias("La vida es bella,bella", "bella")).toEqual(2);
});