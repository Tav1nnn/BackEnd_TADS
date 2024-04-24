// 4. Escreva uma função chamada filtrarArray que aceita uma função de filtro e um array como parâmetros. 
// A função de filtro deve retornar true caso o elemento deva permanecer no array e false caso contrario. 
// A função filtrarArray deve aplicar essa função a todos os elementos e retornar um novo array apenas com os 
// elementos restantes

function filtrarArrayNumMaiorDez(array){
    return array.filter((x) => x > 10)
}

function filtrarArray(fun, array){
    return fun(array);
}

console.log(filtrarArray(filtrarArrayNumMaiorDez, [11,10,9,9]));