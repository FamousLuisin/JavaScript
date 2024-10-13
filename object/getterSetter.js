const sequencia = {
    _valor: 0,
    get valor(){ return this._valor++ },
    set valor(valor){ this._valor = valor}
}

console.log(sequencia.valor)
console.log(sequencia.valor)

sequencia.valor = 10

console.log(sequencia.valor)
console.log(sequencia.valor)
