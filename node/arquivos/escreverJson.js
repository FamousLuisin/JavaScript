const fs = require('fs');

const caminho = __dirname + "/arquivo.json"

const token = {
    tipo: "JWT",
    encode: "encode",
    valor: "value"
}

fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    config.token = token

    fs.writeFile(caminho, JSON.stringify(config, null, 4), err => {
        console.log(err || "Salvo")
    })
})