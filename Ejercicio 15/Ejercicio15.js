// Dada una cadena de texto, devolver el caracter mas usado
function caracterMasRepetido(cadena) {
    let dividir = cadena.toLowerCase().replace(/ /g, '').split('');
    let contador = {}; // Objeto para contar ocurrencias de cada carácter

    // Contar ocurrencias de cada carácter
    for (let i = 0; i < dividir.length; i++) {
        let char = dividir[i];
        contador[char] = (contador[char] || 0) + 1; // Incrementar contador
    }

    let maxCaracter = '';
    let maxCantidad = 0;

    // Encontrar el carácter con más repeticiones
    for (let char in contador) {
        if (contador[char] > maxCantidad) {
            maxCantidad = contador[char];
            maxCaracter = char;
        }
    }

    return maxCaracter; // Devolver el carácter más repetido
}

console.log(caracterMasRepetido("aaaaaaaaaaadddd")); // Esto mostrará el carácter que más se repite
