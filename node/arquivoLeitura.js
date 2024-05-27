// importante o filesystem
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// ler de forma sincrona... -> Dependendo do aruqivo pode travar
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// ler de forma assincrono... 
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// Outra forma de ler
const config = require("./arquivo.json")
console.log(config.db)