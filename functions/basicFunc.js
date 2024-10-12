// Criar de forma literal
function fun1(){return "fun 1"}

// Armazenar em uma variavel
const fun2 = function(){return "fun 2"}

// Armazenar em um array
const array = [fun1, fun2]

// Armazenar no objeto
const objeto = {}
objeto.falar = function(){return "Olá"}

console.log("Função")
console.log(fun1())
console.log(fun2())

console.log()

console.log("Array de função")
array.forEach(element => {
    console.log(element())
});

console.log()

console.log("Função no objeto")
console.log(objeto.falar())