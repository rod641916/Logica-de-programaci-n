/*Imprimir un cuadrado con la cantidad dada pero sin imprimir el centro */

/////////////Mi codigo///////////////

function cuadrado(cantidad) {

    let resultado = [];

    for (let i = 0; i < cantidad; i++) {
        let linea = ""; // Reiniciamos la línea para cada fila

        for (let j = 0; j < cantidad; j++) {
            // Imprimimos asterisco en los extremos o una línea completa si es la primera o última fila
            if (i === 0 || i === cantidad - 1 || j === 0 || j === cantidad - 1) {
                linea += "*";
            } else {
                linea += " "; // Espacios en el medio
            }
        }

        resultado.push(linea); // Imprimimos la línea completa
    }
    return resultado;
}

module.exports = cuadrado;


//////////Codigo curso////////////////
/*function lado(numero) {   //////////esta función pinta la linea de arriba y de abajo
    let lado = "";

    for (let i = 0; i < numero; i++) {
        lado += "*";
    }
    return lado;
}

function cuadrado1(numero) {
    let dibujo = lado(numero) + "\n";//// Se almacena el lado de arriba haciendo un salto de linea
    let contenido = "";
    for (let i = 0; i < numero - 2; i++) {// se restan los asteriscos que se mostraran arriva y abajo 
        contenido = "*";

        for (let x = 0; x < numero - 2; x++) {//// función para eliminar los asterisco de enmedio
            contenido += " "
        }
        contenido += "*";
        dibujo += contenido + "\n" ///se concatena al dibujo los lados con el salto de linea
    }
    dibujo += lado(numero);///se concatena a dibujo la linea de abajo
    return dibujo;
}

console.log(cuadrado1(10))*/