// Evitar adicionar, mas pode excluir e alterar os valores
const produto1 = Object.preventExtensions({
    nome: "Notebook",
    preco: 4999.99,
    tag: "Eletronico"
})
// Não pode
produto1.desconto = 0.15

// Pode
delete produto1.tag
produto1.nome = "Notebook Acer Gamer"

console.log(produto1)

// Evitar deletar e adicionar, mas pode alterar os valores
const produto2 = Object.seal({
    nome: "Iphone",
    preco: 4999.99,
    tag: "Celular"
})
// Não pode
produto2.desconto = 0.15
delete produto2.tag

// Pode
produto2.nome = "Iphone 16"

console.log(produto2)