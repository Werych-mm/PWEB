const prompt = require('prompt-sync')();
const Temp = Number(prompt("Qual a temperatura? "));
const esc = prompt("Qual a sua escala? (Digite c ou f) ");


if (esc === "c") {
    Conv = (Temp * 9/5) + 32;
    console.log("A temperatura convertida é" + Conv);
} else if (esc === "f") {
    Conv = (Temp - 32) * 5/9;
    console.log("A temperatura convertida é " + Conv);
} else {
    console.log("O valor que digitou é inválido.")
}