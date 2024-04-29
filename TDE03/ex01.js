/*1. Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:

- callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par (resultado da soma).
- callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).

2. Utilize a função anterior para criar uma promise que tenha:

- then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
- catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.

Dica: Utilize uma promise com função (resolve, reject).
*/


// ex01
function callbackSucesso(num) {
    return "Par: " + num;
}

function callBackError(num) {
    return "Impar: " + num;
}

function sum(num1, num2, sucesso, error){
    var result = num1 + num2;
    if (result % 2 === 0) {
        console.log(sucesso(result));;
    } else {
        console.log(error(result));;
    }
}

sum(1,1, callbackSucesso, callBackError);

// ex02
function sumPromise(num1, num2) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = num1 + num2;

            if(sum % 2 === 0) {
                resolve(sum);
            } else {
                reject(sum);
            }
        }, 2000);
    });
}

sumPromise(1,1)
.then((result) => {
    console.log(callbackSucesso(result));
}).catch((error) => {
    console.log(callBackError(error));
});

sumPromise(1,2)
.then((result) => {
    console.log(callbackSucesso(result));
}).catch((error) => {
    console.log(callBackError(error));
});
