// promessa cumprida ou promessa rejeitada
function falarDepois(segundos, frase) {
    // Retornando uma promessa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Aceita apenas um parametro
            resolve(frase)
        }, segundos * 1000)
    })
}

// A promisse permite o uso dessa função then
falarDepois(2, "resolvido")
    .then(frase => frase.concat("!!!"))
    .then(frase => console.log(frase))
    .catch(e => console.log(e) )