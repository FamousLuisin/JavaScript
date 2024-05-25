// Diferentes tipos de criar um objeto

// classe -> Tem o problema apresentado em thisBind / thisInterval
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

// função construtora
function newPessoa(nome){
    
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

// função fabrica -> Não tem o problema apresentado em thisBind / thisInterval
function criarPessoas(nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome,
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

// Criando a aprtir da classe
const p1 = new Pessoa("Luis", "Filipe")
p1.falar()
console.log(typeof p1)

console.log()

// Criando a partir de uma function
const p2 = criarPessoas("Noc", "Flisnton")
p2.falar()
console.log(typeof p2)

console.log()

// Criando a partir de uma function construtora
const p3 = new newPessoa("Jhonson")
p3.falar()
console.log(typeof p3)