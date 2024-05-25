function getValor(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getValor
}

console.log(produto.getValor())

const carro = {
    preco: 5000,
    desc: 0.20
}

console.log(getValor.call(carro))
console.log(getValor.apply(carro))

// Muda a forma de executar

// O call passa parametros
console.log(getValor.call(carro, 0.20, '$'))

// O apply passa um array / list
console.log(getValor.apply(carro, [0.20, '$']))