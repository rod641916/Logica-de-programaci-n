///Censurar una palabra que se encuentre en un texto

////////Mi codigo/////////////
function censurado(texto, busqueda) {

    // Validaciones
    if (texto.trim() === "" && busqueda.trim() === "") {
        console.log("No puedes leer el texto y la búsqueda.");
        return; // Salir de la función si ambos son vacíos
    } else if (busqueda.trim() === "") {
        console.log("No puedes hacer la búsqueda.");
        return; // Salir de la función si la búsqueda es vacía
    }

    // Censuramos el texto completo
    texto = texto.split(' ');  // Separamos por palabras

    for (let i = 0; i < texto.length; i++) { //lengt devuvelve la cantidad de elementos de un objeto
        if (texto[i].toLowerCase() === busqueda.toLowerCase()) {
            texto[i] = "CENSURADO"; // Censuramos la palabra que coincide
        }
    }

    // Unimos las palabras censuradas en un texto final
    return texto.join(' ');
}

console.log(censurado("Hola amigos", "amigos"));
console.log(censurado("", ""));




///////Codigo curso//////////

function censura(texto1=false,busqueda1=false){
    let resultado ="";

    if(!texto1 && !busqueda1){
        resultado= "No puedes leer el texto y la busqueda"
    }else if(!texto1 && busqueda1){
        resultado = "No puedes leer el texto"
    }else if(texto1 && !busqueda1){
        resultado="No puedes hacer la busqueda"
    }else if(texto1 && busqueda1){
        resultado = texto1.replace(new RegExp(busqueda1,'gi'),"[censurado]");
    }
    return resultado;
}
console.log(censura("Hola hola amigo","Hola"))

