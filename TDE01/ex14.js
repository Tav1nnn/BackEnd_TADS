// 14. Escreva uma função que receba dois números 
// como parâmetros e retorne verdadeiro se a soma deles for divisível por 5 e falso caso contrário.

function sumMultipleFive(num1, num2){
    return (num1 + num2) % 5 == 0;
}

console.log(sumMultipleFive(10+5));