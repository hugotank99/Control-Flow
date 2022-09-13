const prompt = require ("prompt-sync")();

const aget = prompt('Enter your age: ');
const age = Number(aget);

if(age>=10 && age<=14) {
    console.log('Kid');
}
else if(age>=15 && age<=17) {
    console.log('Teenager');
}
else if (age>=18 && age<=25) {
    console.log('Adult');
}