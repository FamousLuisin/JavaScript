function Pessoa() {
    this.idade = 0

    // Dispara outra função -> Dispara ela a cada tantos milisegundos
    // Nesse caso temos que amarrar a função usando bind(this)
    // Ou subistituir o this dentro da função por self já que o self ele vai ser sempre o mesmo

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

// Instancia a Pessoa
new Pessoa