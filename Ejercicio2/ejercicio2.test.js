
const palindromo = require ("./Ejercicio2")


test("Comprueba que la función polindromo funciona", () =>{
    expect(palindromo).toBeDefined();
});

test("Devolver si la palabra NO es un palindromo",() =>{
    expect(palindromo("Hola")).toEqual(false)
});

test("Devolver si la palabra SI es un palindromo",() =>{
    expect(palindromo("OTTO")).toEqual(true)
})