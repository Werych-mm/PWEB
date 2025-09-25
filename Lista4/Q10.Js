const prompt = require('prompt-sync')();

let year = Number(prompt("Me diga algum ano e eu direi se ele é bissexto "));

if (year % 4 == 0) {
    console.log(`O ano ${year}, é bissexto!`);
}   else {
    console.log(`O ano ${year}, não é bissexto!`);  
} 