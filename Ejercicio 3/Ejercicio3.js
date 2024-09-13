//////////////////Mi funcion////////////////////
function coincidencias(frase,busqueda){  ///Va a recibir 2 parametros
    let fraseCompleta = frase.toString().toLowerCase().replace(/[,!?¿]/g, "").split(" "); //
    let palabraBusqueda = busqueda.toLowerCase();
    let count=0;
    for(let i=0; i<fraseCompleta.length; i++){
        if(palabraBusqueda===fraseCompleta[i]){
            count++;
        }
    }
    return count;
}

console.log(coincidencias("La vida es bella","bella"));



////////////////////////Función curso///////////////

function coincidencias2(frase, busqueda) {
    let texto_limpio = frase.toLowerCase().replace(/[!¿.,¡-]/gi, '');
    let busqueda_limpia = busqueda.toLowerCase(); // Convert busqueda to lowercase

    let resultado = 0;

    if (texto_limpio.includes(busqueda_limpia)) {
        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for (let palabra of palabras) {
            if (mapa[palabra]) {
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda_limpia]; // Use busqueda_limpia here
    }

    return resultado;
}

console.log(coincidencias2("Hola, que tal, soy Rodrigo. Rodrigo", "Rodrigo"));