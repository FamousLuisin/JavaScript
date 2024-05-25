let dobro = function (a){
    return 2 * a
}
console.log(dobro(5))

dobro = (a) => {
    return a * 2
}
console.log(dobro(10))

dobro = (a) => a * 2
console.log(dobro(15))

let ola = function (){
    return "Bom dia"
}
console.log(ola())

ola = () => {
    return "Bom dia"
}
console.log(ola())

ola = () => "Bom dia"
console.log(ola())