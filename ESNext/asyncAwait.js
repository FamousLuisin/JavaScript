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

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

// Nesse caso precimaos do then para itear pelo objeto AsyncFunction
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
