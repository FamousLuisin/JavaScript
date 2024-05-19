function aleatorios(min, max) {
    const valor = Math.random() * (max - min) + min   
    return Math.floor(valor)
}

let opcao = 10

do {
    opcao = aleatorios(1, 11)
    console.log(opcao)
} while (opcao != 10) 