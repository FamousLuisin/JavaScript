function criarProduto(nome, valor, desconto = 0){
    return {
        nome,
        valor,
        desconto,

        aplicarDesconto() {
            let valorDesconto = valor - valor * desconto
            return "valor: " + valorDesconto
        }
    }
}

p1 = criarProduto("Ferrari", 500_000, 0.10)

console.log(p1)
console.log(p1.aplicarDesconto())