function criarPessoa(nome, idade){
    return {
        nome: nome,
        idade: idade,
        falar(){
            return "Olá meu nome é " + this.nome
        }
    }
}

const pessoaAnonima = {
    nome: "Anonima",
    idade: 0,
    falar(){
        return "Olá meu nome é " + this.nome
    }
}

module.exports = {
    criarPessoa,
    pessoaAnonima
}