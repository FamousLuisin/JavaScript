const avo = {
    attr1: "A"
}

const pai = {
    __proto__: avo,
    attr2: "B"
}

const filho = {
    __proto__: pai,
    attr3: "C"
}

console.log(filho.attr1, filho.attr2, filho.attr3)


const carro = {
    
    velAtual: 0,
    velMax: 200,
    delta: 20,
    
    acelerar()
    {
        if (this.velAtual + this.delta <= this.velMax) {
            this.velAtual += this.delta
        } else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return this.velAtual + " Km/h de " + this.velMax + " Km/h"
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 300,
    delta: 50
}

const volvo = {
    modelo: 'V40',
    status() {
        return this.modelo + ": " + super.status()
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

volvo.acelerar()
volvo.acelerar()
volvo.acelerar()

console.log(ferrari.status())
console.log()
console.log(volvo.status())