// 12. Escreva uma função que receba dois números 
// como parâmetros e retorne verdadeiro se o primeiro for múltiplo do segundo e falso caso contrário.

function multiplo(num1, num2){
    return num1%num2 == 0;
}

console.log(multiplo(4,2));