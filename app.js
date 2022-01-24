/*Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']*/

const { reverse } = require("dns");
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

// function miFuncion(texto, cantidad){
//     let stringTemp = texto + " "
//     let nuevoString = stringTemp.repeat(cantidad)
//     return nuevoString;
// }

// console.log(miFuncion(texto, cantidad))

// Dado el siguiente arreglo:
// let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

// let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];

// function numeroMayor(numeros){
//     let numMayor = -999;

//     for(let i=0; i<=numeros.length;i++){
//         if(numeros[i]>numMayor){
//             numMayor=numeros[i];
//         }
//     }

//     return numMayor;
// }

// console.log(numeroMayor(numeros))

// Crear una función que reciba como argumento un arreglo, la función debe de retornar el 
// nombre que tenga más letras del arreglo, y debe de trabajar así:
// let heroes = [‘Deadpool’, ‘Ciclope’, ‘Magneto’, ‘Profesor Charles Xavier’];
// let heroeLargo = masLargo( heroes );
// console.log( heroeLargo ); // Profesor Charles Xavier

let heroes = ["Deadpool", "Ciclope", "Magneto", "Profesor Charles Xavier"]

function masLargo(lista){
    let nombreLargo = "";
    for(i=0;i<lista.length;i++){
        let heroe = lista[i]
        if(heroe.length > nombreLargo.length){
            nombreLargo = heroe
        }
    }

    return nombreLargo
}



console.log(masLargo(heroes))