class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissoa = "Desempregado"){
        super(sobrenome)
        this.profissoa = profissoa
    }
}

const pai = new Pai("Jhonson")
console.log(pai)