class Lancamento {
    constructor(nome = "Anonimo", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = [] 
    }
    
    addLancamentos(...lancamentos){
        lancamentos.forEach(e => this.lancamento.push(e))
    }

    sumario() {
        let valorTotal = 0
        this.lancamento.forEach(e => valorTotal += e.valor)

        return valorTotal
    }
}

const salario = new Lancamento('Salario', 45_000)
const luz = new Lancamento('Salario', -200)

const contas = new CicloFinanceiro(10, 2024)
contas.addLancamentos(salario, luz)

console.log(contas.sumario())