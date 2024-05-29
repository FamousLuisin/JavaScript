function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, tempo)
    })
}

async function executar() {
    // Espear que uma promise seja resolvida
    await esperarPor()
    console.log("Await 1!")

    await esperarPor()
    console.log("Await 2!")

    await esperarPor()
    console.log("Await 3!")
}

executar()