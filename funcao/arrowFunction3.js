// Inicialmente o this aponta para o global
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

console.log()

// Mudando o apontamento do this para obj
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
comparaComThis(this)

console.log()

// O this no arrow aponta para si proprio?
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(this)

console.log()

// Tentando mudar o apontamento na função arrow
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(this)