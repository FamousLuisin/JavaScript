const valores = [7.7, 8.9, 6.3, 9.2]

// Pegar valores pelo index
console.log(valores[0], valores[3])

console.log()

// Pegar indice que não existe ele retorna undefined
console.log(valores[4])
valores[4] = 10
console.log(valores[4])

console.log()

// Tamanho do array
console.log(valores.length)

console.log()

//Adicionar
valores.push(0.5)
console.log(valores)

console.log()

// Remover
valores.pop()
delete valores[0]
console.log(valores)
