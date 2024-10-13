// Notação literal
const carro1 = {
    marca: "Ferrari",
    modelo: "Spyder",
    valor: 350_000
}
console.log(carro1)

// Object
const carro2 = new Object
carro2.marca = "BMW"
carro2.modelo = "320i"
carro2.valor = 150_000
console.log(carro2)

// Função construtora
function Carro(marca, modelo, valor){
    this.marca = marca
    
    this.getCarro = () => {
        return `${marca} - ${modelo} - ${valor}`
    }
}
const carro3 = new Carro("Porsche", "GT3", 2_000_000)
console.log(carro3)

// Função factory - GOSTEI DESSA
function criarCarro(marca, modelo, valor){
    return {
        marca,
        modelo,
        valor,
        getCarro () {
            return `${marca} - ${modelo} - ${valor}`
        }
    }
}
const carro4 = criarCarro("Ford", "Mustang", 300_000)
console.log(carro4)

// Json
const carro5 = JSON.parse(`{
    "marca": "Mercedez",
    "modelo": "c180",
    "valor": 150000
}`)
console.log(carro5)