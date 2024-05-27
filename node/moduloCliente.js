// Classe que usa outro modulos / arquivos
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

// O que foi exportado pelo modulo A
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log()

// O que foi exportado pelo modulo B
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
