// Função anonima = função sem nome
const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(x, y, operacao = soma){
    return "O resultado é: " + operacao(x, y)
}

console.log(imprimirResultado(10, 20))
console.log(imprimirResultado(10, 20, (x, y) => x * y))