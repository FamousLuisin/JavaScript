Object.prototype.attr0 = "Objeto"

const avo = {
    attr1: "Avô"
}

const pai = {
    __proto__: avo,
    attr2: "Pai"
}

const filho = {
    __proto__: pai,
    attr3: "Filho"
}

console.log(`avo: ${avo.attr0} - ${avo.attr1} - ${avo.attr2} - ${avo.attr3}`)
console.log(`pai: ${pai.attr0} - ${pai.attr1} - ${pai.attr2} - ${pai.attr3}`)
console.log(`filho: ${filho.attr0} - ${filho.attr1} - ${filho.attr2} - ${filho.attr3}`)

console.log("\n==============================================================\n")

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const fiat = {
    __proto__: carro,
    modelo: "Palio",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

const ferrari = {
    __proto__: carro,
    velMax: 350,
    modelo: "Spyder",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

fiat.acelerar(350)
console.log(fiat.status())

ferrari.acelerar(350)
console.log(ferrari.status())