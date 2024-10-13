const produto = new Object
produto.nome = "Carro"
produto.marca = "Ford"
produto.modelo = "Fusion"
produto.valor = 50_750.57

console.log(produto)

delete produto.modelo
delete produto.marca
delete produto.valor

console.log(produto)

const carro = {
    marca: "Porsche",
    modelo: "GT3",
    valor: 2_000_000,
    propietario: {
        nome: "Luís Filipe",
        idade: 23
    }
}

console.log(carro)