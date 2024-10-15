// rest -> Juntar todos os valores passados
function soma(...valores){
    let soma = valores.reduce((acumulador, numero) => acumulador += numero, 0);

    return soma
}

// spread -> Espalhar os valores passados
function criaLista(...valores){
    return [...valores]
}

console.log(soma(20, 5, 6, 11))
console.log(criaLista(10, 5, 7, 9))