// Criar de forma literal
function fun1(){}

// Armazenar em uma variavel
const fun2 = function (){}

// Armazenar em um array
const fun3 = function (a, b) {return a + b}

const lista = [fun3]
console.log(lista[0](5, 5))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return "olá"}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function () { console.log('Executando...')})

// Uma função retorna uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 2)(4)
const cincoMais = soma(2, 3)
cincoMais(10)