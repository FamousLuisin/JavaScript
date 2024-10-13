const desejos = [
    '{"marca": "Porsche", "modelo": "GT3", "valor": 2000000}',
    '{"marca": "Ferrari", "modelo": "Spider", "valor": 3000000}',
    '{"marca": "Ford", "modelo": "Mustang", "valor": 350000}',
]

const forObject = json => JSON.parse(json)

function retornarValor(e){
    return e.valor
}

const valorCarros = desejos.map(forObject).map(retornarValor)

console.log(valorCarros)