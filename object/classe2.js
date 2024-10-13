class Avo {
    constructor(){
        this.attr1 = "avo"
    }
}
const avo = new Avo()

class Pai extends Avo {
    constructor(){
        super()
        this.attr2 = "Pai"
    }
}
const pai = new Pai()

class Filho extends Pai {
    constructor(){
        super()
        this.attr3 = "Filho"
    }
}
const filho = new Filho()

console.log(`avo: ${avo.attr1} - ${avo.attr2} - ${avo.attr3}`)
console.log(`pai: ${pai.attr1} - ${pai.attr2} - ${pai.attr3}`)
console.log(`filho: ${filho.attr1} - ${filho.attr2} - ${filho.attr3}`)