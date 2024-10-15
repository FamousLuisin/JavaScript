const fs = require('fs');
const { forEach } = require('lodash');
const path = require('path');

function lerTxt(url){
    return new Promise(resolve => {
        fs.readFile(url, "utf-8", (err, texto) => {
            if (!err){
                resolve(texto)
            }else{
                resolve(err)
            }
        })
        console.log("Lendo...")
    })
}

const caminho = path.join(__dirname, "texto.txt")
lerTxt(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas)
    .then(console.log)