// Outro meio de criar variaveis
// Não é possível declarar a mesma variavel let dentro do mesmo escopo/bloco
// Acessiveis apenas dentro do bloco de código
let preco = 280_000;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

let nome = "Porsche";
let categoria = "Carro"

console.log("Categoria: " + categoria)
console.log("Produto: " + nome)
console.log("Preço normal: " + preco)
console.log("Preço com desconto: " + precoComDesconto)