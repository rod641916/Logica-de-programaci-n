const invertir = require("./Ejercicio4");

test("Invierte una cadena de texto que se le dé a la función invertir", () => {
    expect(invertir("hola")).toEqual("aloh");
});