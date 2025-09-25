const prompt = require('prompt-sync')();
const nf = prompt("Qual é a sua nota? ");

const status = nf >= 7 ? "Aprovado": "Reprovado"; 
console.log(status);