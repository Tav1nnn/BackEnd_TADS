// 2. Escreva uma função chamada somaElementosPares que aceita um array de 
// números como parâmetro e retorna a soma de todos os elementos pares do array.
let sum = 0;

function somaElementosPares(array){
    for(let num of array){
        if(num%2 == 0){
            sum+= num;
        }
    }
    return sum;
}

console.log(somaElementosPares([2,2,3]));