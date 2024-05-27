class Carro {
    constructor(marca, modelo, ano, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor
    }

    detalhar() {
        console.log(`Este é um ${this.marca} ${this.modelo} de ${this.ano}.`);
    }
}

class Concessionaria{
    constructor(nome, cep){
        this.nome = nome
        this.cep = cep
        this.garagem = []
    }

    adicionarCarro(...carros){
        carros.forEach(carro => this.garagem.push(carro))
    }

    sumario(){
        return this.garagem.reduce((total, carro) => total + carro.valor, 0)
    }
}

const ferrari = new Carro("Ferrari", "F40", 1990, 500_000)
const mustang = new Carro("Mustang", "Cobra", 1990, 300_000)

const minhaConcessionario = new Concessionaria('Luisin concessionaria', "99999")
minhaConcessionario.adicionarCarro(ferrari, mustang)

console.log(minhaConcessionario.sumario())