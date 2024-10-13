const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios');

const encontrarChineses = (pessoa) => pessoa.pais === "China"
const encontrarMulheres = (pessoa) => pessoa.genero === "F"
const menorSalario = (acumulador, pessoa) => pessoa.salario < acumulador.salario ? pessoa : acumulador
const maiorSalario = (acumulador, pessoa) => pessoa.salario > acumulador.salario ? pessoa : acumulador

axios.get(url).then(response => {
    const funcionarios = response.data

    const chinesaPobre = funcionarios.filter(encontrarChineses).filter(encontrarMulheres).reduce(menorSalario)
    const chinesaRica = funcionarios.filter(encontrarChineses).filter(encontrarMulheres).reduce(maiorSalario)

    console.log(chinesaPobre)
    console.log(chinesaRica)
})