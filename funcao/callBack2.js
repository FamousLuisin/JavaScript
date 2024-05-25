const notas = [7.7, 6.6, 5.6, 10.0, 7.1, 9.0]

// Sem callback
const notasBaixas = []

for(let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter((nota) => nota < 7)

console.log(notasBaixas2)