// map == chave valor -> chave e um objeto 
const tecnologias = new Map()
tecnologias.set('react', {frameWork: false})
tecnologias.set('angular', {frameWork: true})

// Não funciona igual o objeto
console.log(tecnologias.react)
// Tem q ser feito assim 
console.log(tecnologias.get("react"))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, "Numero"]
])

// chamando o foreach -> Lembrando que seu callback é primeiro valor e dps chave
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})