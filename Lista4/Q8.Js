const prompt = require('prompt-sync')();

let nota = Number(prompt("Olá, me diga sua nota para eu dizer qual é a sua classificação! "))

switch(nota) {
    case (9 || 10):
    console.log("Sua classificação é A de Afterglow!");
    break;
    case (7 || 8):
    console.log("Sua classificação é B de Betty!");
    break;
    case (5 || 6):
    console.log("Sua classificação é C de Cardigan!");
    break;
    case (3 || 4):
    console.log("Sua classificação é D de Dorothea!");
    break;
    case (0 ||  1 || 2):
    console.log("Sua classificação é F de Fearless!");
    break;
    default: 
    console.log("Sua nota não é válida")
}