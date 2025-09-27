const prompt = require('prompt-sync')();

let Re = Number(prompt("Me diga um valor em Reais:💰 "));

function converterReais(valor) {
    const taxas = {
        Euro: 0.187,
        Dolar: 0.160
    };

    const resultados = {
        VFEu: valor * taxas.Euro,
        VfDo: valor * taxas.Dolar
    };

    return resultados; 
}

let convertido = converterReais(Re);

console.log(`${convertido.VFEu} é o valor da taxa em Euro💲`);
console.log(`${convertido.VfDo} é o valor da taxa em Dólar💲`);


