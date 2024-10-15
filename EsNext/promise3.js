function gerarNumeros(min, max){
    if (min > max){
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        let aleatorio = Math.floor((Math.random() * (fator)) + min)
        resolve(aleatorio)
    })
}

gerarNumeros(1, 60)
    .then(num => num * 10)
    .then(console.log)