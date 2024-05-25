function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }

    return soma
}

function soma1(a, b, c){
    // Se o primeiro for falso retorna o segundo (valor padrão)
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

function soma2(a, b, c){
    a = a != undefined ? a : 1
    b = b != undefined ? b : 1
    c = c != undefined ? c : 1

    return a + b + c
}

function soma3(a, b, c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log('=====Soma#0====')
console.log(soma())
console.log(soma(2))
console.log(soma(2, 5, 9, 11))
console.log(soma(0, 0, 0))

console.log()

console.log('=====Soma#1==== -> PIOR')
console.log(soma1())
console.log(soma1(2))
console.log(soma1(2, 5, 9, 11))
console.log(soma1(0, 0, 0))

console.log()

console.log('=====Soma#2====')
console.log(soma2())
console.log(soma2(2))
console.log(soma2(2, 5, 9, 11))
console.log(soma2(0, 0, 0))

console.log()

console.log('=====Soma#3==== -> MELHOR')
console.log(soma3())
console.log(soma3(2))
console.log(soma3(2, 5, 9, 11))
console.log(soma3(0, 0, 0))