//Faça um programa que receba três inteiros e diga qual deles é o maior.
const prompt = require("prompt-sync")();

const valor1 = prompt ('enter the first value: ');
const vl1 = Number (valor1);
const valor2 = prompt ('enter the second value: ');
const vl2 = Number (valor2);
const valor3 = prompt ('enter the third value: ');
const vl3 = Number(valor3);
let maior = 0;

if (vl1>vl2 && vl1>vl3) {
    maior = vl1 } 
else if (vl2>vl1 && vl2>vl3 ) {
    maior = vl2 }
else if (vl3>vl1 && vl3>vl2) {
    maior = vl3
}    
console.log(`the highest value was: ${maior}`)