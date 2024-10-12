function criarPessoa(nome, idade){
    return {
        nome: nome,
        idade: idade,

        falar() {
            return "Meu nome é " + nome
        }
    }
}

p = criarPessoa("Luís", 23)
console.log(p)
console.log(p.falar())