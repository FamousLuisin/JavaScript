function Carro(marca, velocidadeMaxima = 200, delta = 5){

    // Atributo privado
    let velocidadeAtual = 0

    // Atributo publico
    this.marca = marca

    // método público
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const porsche = new Carro("Porsche")

porsche.acelerar()
console.log(porsche.getVelocidadeAtual())
console.log(porsche.marca)

const ferrari = new Carro("Ferrari", 350, 50)

ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
