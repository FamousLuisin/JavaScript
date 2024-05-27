console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Adicionar uma nova funcionalidade a um prototype
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Esolca'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([0, 1, 2, 3].first())