// Não aceita repetição / não indexada
const times = new Set()
times.add("Lakers")
times.add("Chicago Bulls")
times.add("Memphis Grizzlies").add("New Jersey Nets").add("Golden State")
times.add("Lakers")

console.log(times)
console.log(times.size)
console.log(times.has('Lakers'))

// Criar através de um array -> Retira todas as duplicações
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)