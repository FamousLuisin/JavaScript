// Impedir que adicione novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: "Promoção"
})
console.log('Extensivel: ' + Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Descrição"
delete produto.tag
console.log(produto)

// Impedir que adicione e exclua atributos, MAS pode alterar valores
const pessoa = {nome: "Juliana", idade:30}
Object.seal(pessoa)
console.log('Seal: ' + Object.isSealed(produto))
pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

// Selar o objeto e seus valores