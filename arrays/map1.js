const valores = [1, 2, 3, 4, 5]

const dobro = valores.map((e) => e * 2)

const triplicar = function(e){
    return e * 3
}
const triplo = valores.map(triplicar)

console.log(valores)
console.log(dobro)
console.log(triplo)