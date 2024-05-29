function retornarValor(valor = 10) {
    return new Promise(resolve => {
        setTimeout(() => resolve(valor), 5000)
    })
}

async function executar() {
    let valor = await retornarValor(10)

    // Espear que uma promise seja resolvida
    console.log("Await 1!")
    await retornarValor(valor + 1).then(console.log)
    
    console.log("Await 2!")
    await retornarValor(valor + 2).then(console.log)

    console.log("Await 3!")
    await retornarValor(valor + 3).then(console.log)

    return valor + 3
}

async function esperarExecucao() {
    const valor = await executar()
    console.log(valor)
}

esperarExecucao()

// Retorno da função
// executar().then(console.log)