function soma (...valores){
    let soma = 0

    for (const numero of valores) {
        soma += numero
    }

    return soma
}

console.log(soma())

console.log("========== Diferença ==========")

const linguagens = ['Python', 'Java', 'Js', 'Go', 'C']

console.log("ForIn: ") // Itera sobre indices
for (const key in linguagens) {
    console.log(key)
}

console.log()

console.log("ForOf: ") // Itera sobre valores
for (const value of linguagens) {
    console.log(value)
}