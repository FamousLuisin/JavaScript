const aprovados = ['Charlotte', 'Noki', 'Jhonson', 'Julia', 'Mike']

aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1}. ${nome}`)
})

console.log("\n===============\n")

const exibirAprovados = (nome) => console.log(nome)

aprovados.forEach(exibirAprovados)