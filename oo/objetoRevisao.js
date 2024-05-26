// Coleção dinamica de pares e chaves
const produto = new Object
produto.nome = "Cadeira"
produto.preco = 250

console.log(produto.nome + " - " + produto.preco)
console.log(produto)

// Deletar uma chave
delete produto.preco
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 100_000,
    proprietario: {
        nome: "Raul",
        idade: 56
    }
}

console.log(carro)

