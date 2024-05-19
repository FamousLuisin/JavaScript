for (let index = 0; index <= 10; index++) {
    console.log(`i = ${index}`)
}

console.log()

const notas = [6.7, 10, 7.5, 4, 4.5, 1.3]

for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
    console.log(element)
}

console.log()

notas.forEach(element => {
    console.log(element)
});