const pai = {
    nome: "Julius",
    cabeloTipo: "Crespo",
    cabelo: "Preto"
}

const filha = Object.create(pai)
filha.nome = "Julie"

const filho = Object.create(pai, {
    nome: {value: "Jhonson", writable: true, enumerable: true},
    cabeloTipo: {value: "cacheado", writable: true, enumerable: true}
})

console.log(filha)
console.log(filho)

console.log()

for(let key in filha){
    filha.hasOwnProperty(key) ? console.log(key) : console.log("Por hernaça: " + key)
}

console.log()

for(let key in filho){
    filho.hasOwnProperty(key) ? console.log(key) : console.log("Por hernaça: " + key)
}