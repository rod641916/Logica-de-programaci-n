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

console.log(coincidencias("Cellese uno dos trs","bella"));