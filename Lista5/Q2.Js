function simulacao() {
    carrinho = [
        {
            nome: "Disco",
            preco: 239.90,
            quantidade: 1,
        },
        {
            nome: "tênis",
            preco: 250.00,
            quantidade: 1,
        },
        {
            nome: "óculos",
            preco: 125,
            quantidade: 1,
        } 
    ]

    let total = 0;
    let morecash = carrinho[0];
    let subcash = carrinho[0];

        for(let i = 0; i < carrinho.length; i++) {
            let item = carrinho[i];
            total += item.preco * item.quantidade;
        
        if (item.preco > morecash.preco) {
            morecash = item;
        }

        if(item.preco < subcash.preco) {
            subcash = item
        }
    }
    
    console.log("༘˚⋆🛍️ ｡⋆ 🛒 ⋆ 𖦹.✧˚Valor total da compra:༘˚⋆🛍️ ｡⋆ 🛒 ⋆ 𖦹.✧˚ ", total);
    console.log("Produto mais caro:🤩 ", morecash.nome);
    console.log("Produto mais barato:🤔 ", subcash.nome);
}

simulacao();