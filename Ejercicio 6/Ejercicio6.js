function cuadrado(cantidad) {
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

        console.log(linea); // Imprimimos la línea completa
    }
}

cuadrado(10);