const criarPessoa = require('./criarPessoa')

// Aqui ta criando um novo objeto com a função q vem de criarPessoa.js
const julia = criarPessoa.criarPessoa("Charlotte", 24)
console.log(julia.falar())

// Aqui ta compartilhando um mesmo objeto q vem de criarPessoa.js
const anonima1 = criarPessoa.pessoaAnonima
const anonima2 = criarPessoa.pessoaAnonima

anonima1.nome =  "Desconhecida"
console.log(anonima2.falar())