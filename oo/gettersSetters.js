const sequencia = {
    // convenção
    _valor: 1,

    // get é uam função
    get valor() {
        return this._valor++;
    },

    // set tbm é uma função
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
};

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)