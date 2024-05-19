function aleatorios(min, max) {
    const valor = Math.random() * (max - min) + min   
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 10) {
    opcao = aleatorios(1, 11)
    console.log(opcao)
}