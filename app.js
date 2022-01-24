/*Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']*/

let process = require("process");
let texto = process.argv[2];
let cantidad = process.argv[3]

// function miFuncion(texto){

//     let nuevoArray = texto.split(" ");

//     return nuevoArray;
// }

// console.log(miFuncion(texto))

/*Programa una función que repita un 
texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.*/

function miFuncion(texto, cantidad){
    let stringTemp = texto + " "
    let nuevoString = stringTemp.repeat(cantidad)
    return nuevoString;
}

console.log(miFuncion(texto, cantidad))