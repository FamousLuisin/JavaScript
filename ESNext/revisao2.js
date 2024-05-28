// Arrow Function --> Seu this sempre apontará para o mesmo objeto
const soma = (a, b) => a + b
console.log(soma(2, 5))

const multiplica = (a, b) => {
    return a * b
}
console.log(multiplica(2, 9))

// Parametro default
function log(texto = "Node") {
    console.log(texto)
}

log()
log("JS")

// Operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5, 6))