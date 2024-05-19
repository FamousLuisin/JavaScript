function resultado(nota){
    if (nota >= 7 && nota <= 10) {
        return "Aprovado"
    } else if (nota >= 4 && nota < 7){
        return "Recuperação"
    } else if (nota >= 0 && nota < 4){
        return "Reprovado"
    } else{
        return "Nota invalida"
    }
}

console.log(resultado(10))
console.log(resultado(5))
console.log(resultado(1))
console.log(resultado(-1))
console.log(resultado(11))