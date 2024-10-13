const alunos = [
    {nome: "Jhonso", nota: 10, bolsista:true},
    {nome: "Flinston", nota: 8, bolsista:false},
    {nome: "Noc", nota: 6, bolsista:true}
]

const todosBolsistas = alunos.reduce((acumulador, e) => {
    if(!e.bolsista){
        return acumulador = false
    }
    return acumulador
}, true)
console.log(todosBolsistas)

const media = alunos.reduce((acumulador, e) => acumulador += e.nota, 0) / alunos.length
console.log(media)
