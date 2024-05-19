const notas = [6.7, 10, 7.5, 4, 4.5, 1.3]

for (let i in notas) {
    console.log(i + " = " + notas[i])
}

console.log()

const pessoa = {
    nome: "Noki",
    sobrenome: "Jhonson",
    idade: 22,
    peso: 50
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
