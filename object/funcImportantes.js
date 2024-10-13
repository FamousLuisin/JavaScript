const pessoa = {
    nome: "Luís",
    idade: 23,
    peso: 50
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
Object.entries(pessoa).forEach(([chave, valor]) => console.log(chave + ": " + valor))
