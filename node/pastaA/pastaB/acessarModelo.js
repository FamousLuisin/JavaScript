// importando um modulo criado
const moduloB = require('../../moduloB');
console.log(moduloB.boaNoite())

// Importando um modulo instalado -> pelo node_modules
const _ = require('lodash')

// Importando o modulo que vem junto do node
const http = require('http')

http.createServer((req, res) => {
    res.write(moduloB.bomDia)
    res.end()
}).listen(8080)

