function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Porsche',
    preco: 500_000,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco(0.20, "$"))
console.log(getPreco.call(produto, 0.20, "$"))
console.log(getPreco.apply(produto, [0.20, "$"]))
