//Faça um programa que entre com três números e coloque em ordem crescente.

const prompt = require("prompt-sync")();

const valorA = prompt ('enter the first value: ');
const vl1 = Number (valorA);
const valorB = prompt ('enter the second value: ');
const vl2 = Number (valorB);
const valorC = prompt ('enter the third value: ');
const vl3 = Number(valorC);

if (vl1<vl2 && vl2<vl3) {
    console.log(`the ascending order is: ${vl1}<${vl2}<${vl3}`)
} 
else if (vl1<vl3 && vl3<vl2){
    console.log(`the ascending order is: ${vl1}>${vl3}>${vl2}`)
}
else if (vl2<vl1 && vl1<vl3) {
    console.log(`the ascending order is: ${vl2}>${vl1}>${vl3}`)
}
else if (vl2<vl3 && vl3<vl1) {
    console.log(`the ascending order is: ${vl2}>${vl3}>${vl1}`)
}
else if (vl3<vl1 && vl1<vl2){
    console.log(`the ascending order is: ${vl3}>${vl1}>${vl2}`)
}
else if (vl3<vl2 && vl2<vl1) {
    console.log(`the ascending order is: ${vl3}>${vl2}>${vl1}`)
}