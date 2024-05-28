const porta = 3303

const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const bd = require('./bd')

// Qualquer requisição feita vai passar por esse middleware
app.use(bodyParser.urlencoded( {extended: true }))

// Pedir algo do servidor
app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos()) // Converte o objeto para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id)) // Converte o objeto para JSON
})

// Postar algo no servidor
app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Converte o objeto para JSON
})

// Alterar algo no servidor
app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Converte o objeto para JSON
})

// Excluir Produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto) // Converte o objeto para JSON
})

// Qual porta a api esta escutando
app.listen(porta, () =>{
    // callback -> falar que conseguiu o acesso a porta
    console.log("Servidor está executando na porta " + porta)
})