// A instancia Unica retorna um objeto -> Estao usando a mesma intancia de objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//A instancia nova retorna uma função factory -> cria novos objetos / instancias diferentes
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor + " - " + contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor + " - " + contadorD.valor)