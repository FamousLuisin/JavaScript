// O objeto aponta para um endereço 
// O endereço do objeto é constante, mas não os valores dentro dele
const pessoa = {nome: "Joao"}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Nesse caso, vai retorna erro, pq você esta apontando para outro obj
// Esse outro obj está em um espeço de memória diferente e esse espaço como dito acima deve ser constante
// pessoa = {nome: "Ana"} 
// console.log(pessoa)

// .freeze() -> congela o objeto o tornando inalteravel
Object.freeze(pessoa)
pessoa.nome = "Ana"
console.log(pessoa)