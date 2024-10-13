const produtos = [
    {nome: "Notebook Acer", preco: 4499.99, fragil: true},
    {nome: "Iphone 16", preco: 6999.99, fragil: true},
    {nome: "Fone sem fio", preco: 299.99, fragil: false}
]

const caros = produtos.filter(e => e.preco >= 6000).forEach(e => console.log(e.nome))
console.log("=====================")
const frageis = produtos.filter(e => e.fragil).forEach(e => console.log(e.nome))
console.log("=====================")
const naoFrageis = produtos.filter(e => !e.fragil).forEach(e => console.log(e.nome))