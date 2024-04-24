// 10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

function factorial(num){
    if(num == 0){
        return 1;
    }
    return (num * factorial(num-1));
}

console.log(factorial(5));