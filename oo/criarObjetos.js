// Forma literal
const obj1 = {}
console.log(obj1)

// Object em JS == Função cosntrutora
const obj2 = new Object
console.log(obj2)

// Funções construtoras == Função cosntrutora
function Produto(nome, preco, desconto){
    // Pública
    this.nome = nome

    this.getPrecoComDesconto = () => preco * (1 - desconto)
}

const obj3 = new Produto("Camaro", 250_000, 0.5)
console.log(obj3.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioDiario, faltas){
    return {
        nome: nome,
        salarioDiario: salarioDiario,
        faltas: faltas,
        getSalario(){
            return salarioDiario * (30 - faltas)
        }
    }
}

const obj4 = criarFuncionario("João", 150, 4)
console.log(obj4.getSalario())

// Classe (ES6)
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    saudacao() {
        console.log(`Este é um ${this.marca} ${this.modelo} de ${this.ano}.`);
    }
}

const obj5 = new Carro("Toyota", "Corolla", 2020);
obj5.saudacao();

// Através de json
const obj6 = JSON.parse('{"Info": "Venho do json"}')
console.log(obj6)