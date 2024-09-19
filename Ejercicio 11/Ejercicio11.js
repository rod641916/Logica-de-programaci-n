////////Mi codigo/////////////
function censurado(texto, busqueda) {

    let texto_separado = texto.toString().toLowerCase().split(' ');

    for (let i = 0; i < texto_separado.length; i++) {

        let elemento = texto_separado[i];

        if (elemento === busqueda.toLowerCase()) {
            texto_separado[i] = "Censurado";
            
        } else if (texto.trim() ==="" && busqueda.trim() ==="") {
            console.log("No puedes leer el texto y la busqueda")
            break;
        } else if (busqueda.trim() === "") {
            console.log("No puedes hacer la busqueda")
            break;
        }

    }
    return texto_separado.join(' ');
}

console.log(censurado(" ", " "))

///////Codigo curso//////////
