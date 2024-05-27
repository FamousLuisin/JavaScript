const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

// filter
const filtrarPais = funcionario => funcionario.pais === "China"
const filtrarMulheres = funcionario => funcionario.genero === "F"

// reduce -> Esta pegando um funcionario e analisando com o proximo funcionario e retornando um funcionario
const menorSalario = (funcionario, funcAtual) => {
    return funcionario.salario < funcAtual.salario ? funcionario : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const funcionariaFiltrada = funcionarios
        .filter(filtrarPais)
        .filter(filtrarMulheres)
        .reduce(menorSalario)

    console.log(funcionariaFiltrada)
})

