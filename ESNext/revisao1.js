// Destructuring -  desempacotar
const [l, e, ...tras] = "letras"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = { nome: "Noc", idade: 9}
console.log(i, nome)