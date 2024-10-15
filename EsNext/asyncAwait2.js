function gerarNumeros(min, max, selecionados){
    if (min > max){
        [min, max] = [max, min]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (fator)) + min
        if(selecionados.includes(aleatorio)){
            reject("Já selecionado")
        } else { 
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qntNumeros, tentativas=0){
    try{
        const numeros = []
        for (let _ of Array(qntNumeros).fill()) {
            numeros.push(await gerarNumeros(1, 60, numeros))
        }

        return numeros
    } catch(e){
        if(tentativas = 3){
            throw "Erro"
        } else{
            gerarMegaSena(qntNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)