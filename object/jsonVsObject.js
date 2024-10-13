const carro1 = {
    marca: "Porsche",
    modelo: "911",
    ano: 1976
}

console.log(JSON.stringify(carro1))

let json = `{
    "marca": "Ferrari",
    "modelo": "Spyder",
    "ano": 2025
}`
const carro2 = JSON.parse(json)

console.log(carro2)