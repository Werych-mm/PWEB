const prompt = require('prompt-sync')();

let Verfication = Number(prompt("Por favor digite um número para vermos se ele é impar ou par."));

Verfication % 2 == 0 ? console.log("O número que você digitou é par") : console.log("O número que você digitou é impar");
