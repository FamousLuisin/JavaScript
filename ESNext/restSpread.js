// Operador rest -> Parametro de uma função == Juntar em um array
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5, 6))

// Operador spread com Objetos == Espalhar dentro de um objeto parametros de outro objeto
const funcionario = {
    nome: "Maria",
    salario: 5_000
}

const clone = {
    ativo: true,
    ...funcionario
}

console.log(funcionario)
console.log(clone)

// Operador spread com Array == Espalhar dentro de um array outro array
const nomes = ["Noc", "Jhonson", "Flinston"]
const meusNomes = ["Luis", ...nomes, "Luisin"]
console.log(nomes)
console.log(meusNomes)