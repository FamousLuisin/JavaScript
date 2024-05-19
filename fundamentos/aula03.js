const escola = "Cod3r"

// charAt retorna a letra na posição, caso não haja mais posições retorna vazio
console.log("charAt: " + escola.charAt(4))
console.log("charAt: " + escola.charAt(5))

// charCodeAt retorna o codigo da letra na posição, caso não haja mais posições retorna "NaN"
console.log("charCodeAt: " + escola.charCodeAt(3))
console.log("charCodeAt: " + escola.charCodeAt(5))

// indexOf retorna o valor cajo ele esteja na String e -1 caso não haja nada
console.log("indexOf: " + escola.indexOf('3'))
console.log("indexOf: " + escola.indexOf('Z'))

// substring imprime a string a partir do index passado e até um index desejado (se não passar o desejado ele vai até o fim)
console.log("substring: " + escola.substring(1))
console.log("substring: " + escola.substring(0, 3))

//concat serve para concatenar strings
console.log('concat: Escola '.concat(escola).concat("!"))

// replace significa subistituir algo na string
console.log("replace: " + escola.replace("3", "e"))

// split separa a string criando um array
console.log("Ana,Maria,Pedro".split(","))

// Template de string
const nome = "Rebeca"
const concatenar = "Olá " + nome + "!"
const template = `Olá ${nome}!`

console.log("Templates: ")
console.log(concatenar)
console.log(template)
console.log(`1 + 1 = ${1 + 1}`)