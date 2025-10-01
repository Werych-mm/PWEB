produtos = [
    {
        Produto: "Notebook",
        Valor_total: 2500,
        Com_desconto: 2250,
    },

    {
        Produto: "Mouse",
        Valor_total: 800,
        Com_desconto: 720,
    },

    {
        Produto: "Teclado",
        Valor_total: 600,
        Com_desconto: 540,
    },

    {
        Produto: "Cadeira gamer",
        Valor_total: 900,
        Com_desconto: 810,
    },
]

    total = 0

    for (i = 0; i < produtos.length; i++) {
        item = produtos[i];
        total += item.Com_desconto;
        console.log(`O produto ${item.Produto}, foi vendido por ${item.Com_desconto}`);
    }

    console.log(`O total das foi ${total}R$`)