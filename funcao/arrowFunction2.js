function Pessoa(){
    this.idade = 0

    // Como é uma arrow function o this não é alterado com quem ta chamando
    // Nesse caso não é necessario o bindo ou o uso do self
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new Pessoa