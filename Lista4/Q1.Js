const prompt = require('prompt-sync')();
const idade = prompt("Qual é a sua idade? ");
console.log(`Você tem ${idade} anos.`);


if (idade > 0 && idade <=12 ) {
    console.log("Tu és uma criança");
} else if (idade >= 13 && idade <=17) {
    console.log("Tu és um adolescente");
}   else if (idade >= 18 && idade <= 59) {
    console.log("Tu és um adulto"); 
} else {
    console.log("Tu és um idoso");
}

