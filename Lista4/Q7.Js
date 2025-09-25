const prompt = require('prompt-sync')();

console.log("Me diga três números e eu direi qual é o maior.");
let num1 = Number(prompt("Primeiro número: "));
let num2 = Number(prompt("Segundo número: "));
let num3 = Number(prompt("Terceiro número: "));

if (num1 > num2 && num1 > num3) {
    console.log(`O ${num1} é o maior `);
} else if (num2 > num1 && num2 > num3 ) {
    console.log(`O ${num2} é o maior `);
} else {
    console.log(`O ${num3} é o maior `)
}