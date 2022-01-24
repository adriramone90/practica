/*Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']*/

let process = require("process");
let texto = process.argv[2];

function miFuncion(texto){

    let nuevoArray = texto.split(" ");

    return nuevoArray;
}

console.log(miFuncion(texto))