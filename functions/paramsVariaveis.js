function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }

    return soma
}

console.log(soma(5, 5, 10, 7))