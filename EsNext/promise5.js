function funcionarOuNao(chancheError){
    return new Promise((resolve, reject) => {
        try{
            let aleatorio = Math.random()
            if (aleatorio < chancheError){
                reject("Error: " + aleatorio)
            } else {
                resolve("Valor: " + aleatorio)
            }
        } catch(e) {
            reject("Error catch: " + e)
        }
    })
}

funcionarOuNao(0.5)
    .then(console.log)
    .catch(console.log)