const fs = require('fs')

const produto = {
    nome: "Celular",
    preco: 1500.68,
    desconto: 0.15
}

fs.writeFile(__dirname + "/arquivoProduto.json", JSON.stringify(produto), err => {
    console.log(err || "arquivo salvo")
})