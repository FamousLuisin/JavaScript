function gerarAleatorio(min, max){
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (fator) + min)
        resolve(aleatorio)
    })
}

gerarAleatorio(10, 20)
    .then(num => num * 10)
    .then(num => "O numero gerado foi: " + num)
    .then(console.log)
    