function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

// Adicionando o atributo nome no pai / prototype
MeuObjeto.prototype.nome = "Sem nome"
MeuObjeto.prototype.falar = function(){
    console.log('Bom dia! ' + this.nome)
}

obj1.nome = 'Noc'
obj2.nome = 'Flinston'

obj1.falar()
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.falar()