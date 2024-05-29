function gerarAleatorio(min, max, numerosSorteados){
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (fator) + min)

        if (numerosSorteados.includes(aleatorio)) {
            reject("numero repetido")
        } else {
            resolve(aleatorio)
        }

    })
}

async function gerarMegaSena(quantidade){
    try {
        const numeros = []

        for (let _ of Array(quantidade).fill()) {
            numeros.push(await gerarAleatorio(1, 100, numeros))
        }

        // resolver a promise
        return numeros

    } catch (error) {
        // rejeitar a promise
        throw "Que chato"
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)

// gerarAleatorio(1, 5, [1, 2, 3])
//     .then(console.log)
//     .catch(console.log)
