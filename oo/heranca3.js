const pai = {
    nome: "Pedro",
    corCabelo: "Preto"
}

// Criar filha ja apontada para o objeto pai -> Usando create
const filha1 = Object.create(pai)
filha1.nome = "Ana"

console.log(filha1.corCabelo)

console.log()

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
})

console.log(filha2.corCabelo)
filha2.nome = "Carla"
console.log(filha2.nome)
console.log(filha2.religia)

console.log()

for (const key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log("Herança: " + key)
}