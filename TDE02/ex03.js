// 3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. 
// A função mapearArray deve aplicar a função recebida a cada elemento 
// do array e retornar um novo array com os elementos resultantes.


function mapArray(array){
    return array.map((x) => x * 2);
}

function mapearArray(fun, array){
    return fun(array);
}

console.log(mapearArray(mapArray, [1,1,1,1]));