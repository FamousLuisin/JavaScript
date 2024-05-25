// cosntante pessoa recebendo um objeto
const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

// Armazenar uma função de objeto dentro de uma constante
const falar = pessoa.falar
falar() // Conflito entre o paradigmar funcional e orientado a objeto

// Nesse caso podemos usar o bind -> passar um objeto que vai resolver aquela função
// Basicamente aquele objt se torna o this daquela função (Amarrar um objeto para ser o dono da função)
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
