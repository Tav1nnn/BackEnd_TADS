// 13. Faça um programa que verifique se um número é negativo, positivo ou zero.

function verify(num){
    if(num>0){
        return "positivo";
    }else if(num<0){
        return "negativo";
    }
    return "zero";
}

console.log(verify(-10));