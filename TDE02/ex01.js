// 1. Escreva uma função chamada encontrarMaiorElemento que aceita um array 
// de números como parâmetro e retorna o maior elemento do array.

function encontrarMaiorElemento(array){
    return Math.max(...array);
}

console.log(encontrarMaiorElemento([1,2,3,4,5]));
