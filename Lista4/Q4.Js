const prompt = require('prompt-sync')();

console.log("Seja bem vindo a caluladora!")
let num1 = Number(prompt("Escolha um número "));
let num2 = Number(prompt("Escolha outro número "));
console.log("Por favor escolha um dos operadores abaixo")
let choose = prompt("(+, -, *, /, % ");
let resul;

switch(choose) {
    case "+":
        resul = num1 + num2;
        console.log("A soma dos seus números é " + resul);
        break;
    case "-":
        resul = num1 - num2;
        console.log("A subtração dos seus números é " + resul);
        break;
    case "*":
        resul = num1 * num2;
        console.log("A multiplicação dos seus números é " + resul);
        break;
    case "/":
        resul = num1 / num2;
        console.log("A divisão dos seus números é " + resul);
        break;
    case 5:
        choose === "%"
        resul = num1 % num2;
        console.log("O resto da divisão dos seus números é " + resul);
        break;
    default:
        console.log("O operador que você digitou é inválido.")
        break;
}