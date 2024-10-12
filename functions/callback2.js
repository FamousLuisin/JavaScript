const notas = [7.7, 7.1, 5.9, 9.9, 4.1]

// Sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
let notasBaixas2 = notas.filter(valor => valor < 7)

console.log(notasBaixas2)