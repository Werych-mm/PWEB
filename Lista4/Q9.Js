const prompt = require('prompt-sync')();

let type = prompt("Olá, sabia que na nossa loja temos descontos para: \n Estudantes(e), Apostentados(a)? \n Ou você não atende a nenhum requisito(n)? ");

switch(type) {
    case "c":
        console.log("Seu desconto é de 50%.");
        break;
    case "a":
        console.log("Seu desconto é de 30%.");
        break;
    case "n":
        console.log("Você não tem desconto.");
        break;
}