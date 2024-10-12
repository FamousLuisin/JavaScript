const soma = function (x, y){
    return x + y
}

const subtracao = (x, y) => {
    return x - y
}

const imprimir = function (x, y, operacao = soma){
    console.log(operacao(x, y))
}

imprimir(10, 5)
imprimir(10, 5, subtracao)
imprimir(10, 5, function (x, y){
    return x / y
})
imprimir(10, 5, (x, y) => x * y)