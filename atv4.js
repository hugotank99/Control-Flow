//Faça um programa em que permita a entrada de um número qualquer e exiba se este número é par ou ímpar.
//Se for par exiba também a raiz quadrada do mesmo; se for ímpar exiba o número elevado ao quadrado.

const prompt = require("prompt-sync")();

const numTx = prompt('Enter a number: ')
const nume = Number(numTx)

if (nume%2==0) {
    const num1 = Math.sqrt(nume)
    console.log(`${nume} is an even number of its square root is ${num1}`)
}
else {
    const num2 = Math.pow(nume,2);
    console.log(`${nume} is an odd number being squared ${num2}.`);
}