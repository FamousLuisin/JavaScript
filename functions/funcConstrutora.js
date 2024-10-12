function Carro(_marca, velocidadeMax = 200, delta = 5){
    let velocidadeAtual = 0
    
    let marca = _marca

    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    this.getMarca = function () {
        return marca
    }
}

const up = new Carro("Fiat")
up.acelerar()
up.acelerar()
up.acelerar()
up.acelerar()
up.acelerar()
console.log(`${up.getMarca()} - ${up.getVelocidadeAtual()}`)

const spyder = new Carro("Ferrari", 380, 20)
spyder.acelerar()
spyder.acelerar()
spyder.acelerar()
spyder.acelerar()
spyder.acelerar()
console.log(`${spyder.getMarca()} - ${spyder.getVelocidadeAtual()}`)