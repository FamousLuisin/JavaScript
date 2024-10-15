function gerarAleatorio(min, max, tempo = 2000){
    if (min > max){
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        console.log("Gerando...")
        setTimeout(() => {
            const fator = max - min + 1
            let aleatorio = Math.floor((Math.random() * (fator)) + min)
            resolve(aleatorio)
        }, tempo)
        
    })
}

function gerarNumeros(){
    return Promise.all([
        gerarAleatorio(1, 60),
        gerarAleatorio(1, 60),
        gerarAleatorio(1, 60),
        gerarAleatorio(1, 60),
        gerarAleatorio(1, 60),
    ])
}

gerarNumeros().then(console.log)