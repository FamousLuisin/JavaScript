const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

// Pega as chaves
console.log(Object.keys(pessoa))

console.log()

// pegar os valores
console.log(Object.values(pessoa))

console.log()

// pegar chave e valor
console.log(Object.entries(pessoa))

console.log()

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(chave + " - " + valor)
})