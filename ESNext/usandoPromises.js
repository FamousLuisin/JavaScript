const http = require('http');

// Função para obter dados da turma usando Promises
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    // Retirnando uma promise
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = '';

            resposta.on('data', dados => {
                resultado += dados;
            });

            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            });

            resposta.on('error', (err) => {
                reject(err);
            });
        });
    });
};

// Array para armazenar nomes
let nomes = [];

// Obtendo dados das turmas A, B e C -> Cria uma matriz
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    // Concatenar os nomes de todas as turmas -> fazendo um Spread deixando apenas 1 array com os alunos
    .then(turmas => nomes = nomes.concat(...turmas))
    // Pegando apenas os nomes dos alunos
    .then(alunos => alunos.map(aluno => aluno.nome))
    // Imprimindos todos os alunos
    .then(nomes => console.log(nomes))
    .catch(e => console.error(e));