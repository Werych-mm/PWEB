const prompt = require('prompt-sync')();

const nome = "Taylor Swift"
const senha = "1989"

let username = prompt("Qual o seu nome de usuário? ");
let userpass = prompt("Qual a sua senha? ");

if (nome == username && senha == userpass) {
    console.log("Swift confirmado. Pode entrar!")
} else {
    console.log("Desculpa, mas só swifters tem o acesso.")
}