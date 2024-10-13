const fs = require('fs');

const caminho = __dirname + "/arquivo.json"

fs.readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    const db = config.db

    console.log(db)
})
