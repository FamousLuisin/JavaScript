// Gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = b !== undefined ? b : 1
    c = c !== undefined ? c : 1

    return a + b + c
}

function soma3(a, b, c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c

    return a + b + c
}

// Melhor forma
function soma4(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma1(5, 5, 0))
console.log(soma2(5, 5, 0))
console.log(soma3(5, 5, 0))
console.log(soma4(5, 5, 0))