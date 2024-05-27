function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Aula 01', 123)
const aula2 = new Aula('Aula 02', 456)

console.log(aula1)
console.log(aula2)

// Simular o new
function novo(f, ...params){
    // Criar um objeto
    const obj = {}

    // relacionar o obj criado ao prototype
    obj.__proto__ = f.prototype

    // chamar a função
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Aula 03', 789)
console.log(aula3)