// Destructuring -> basicamente um desempacotar do python

// Objeto
const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        rua: "Gay",
        numero: 24
    }
} 

const {nome, idade} = pessoa
console.log(nome + " - " + idade)

const {nome: n, idade: i} = pessoa
console.log(n + " - " + i)

// Apenas o "ultimo" valor chamado pode ser indefinido ou null
const {endereco: {rua, numero, cep}} = pessoa
console.log(rua + " - " + numero + " - " + cep)

// Isso aqui dá erro pq ele esta tentando pegar algo dentro de uma valor não definido ou null
// const {empresa: {cnpj}} = pessoa
// console.log(cnpj)

console.log()

// Array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

console.log()

// Function
function rand1({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand1(obj))
console.log(rand1({min: 900}))
console.log(rand1({max: 10}))
console.log(rand1({}))

console.log()

// function e array
function rand2([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([900]))
console.log(rand2([,10]))
console.log(rand2([]))