// factory Simples -> Função que retorna objeto
function criarPessoas(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

const pessoa1 = criarPessoas()
console.log(pessoa1.nome)

function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.5
    }
}

const prod1 = criarProduto("Mercedez", 500_000)
console.log(prod1.nome)
console.log(prod1.preco)
console.log(prod1.desconto)