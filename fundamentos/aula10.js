function tratarErro(erro){
    // Lançar um erro com comentario
    //throw new Error('...')

    // Retorna um "novo" erro
    // throw "Erro"

    // Retornar um objeto
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

function imprimirNome(obj){
    try {
        console.log(obj.name.toUpperCase())
    } catch (e) {
        tratarErro(e)
    } finally{
        console.log("Fim")
    }
}

const obj = { nome: "Roberto"}
imprimirNome(obj)