console.log(`${typeof Function} - ${Function.__proto__ === Function.prototype} - ${Function.prototype.__proto__ === Object.prototype}`)
console.log(`${typeof String} - ${String.__proto__ === Function.prototype} - ${String.prototype.__proto__ === Object.prototype}`)
console.log(`${typeof Array} - ${Array.__proto__ === Function.prototype} - ${Array.prototype.__proto__ === Object.prototype}`)
console.log(`${typeof Object} - ${Object.__proto__ === Function.prototype} - ${Object.prototype.__proto__ === null}`)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

Array.prototype.first = function () {
    return this[0]
}

console.log("noc".reverse())
console.log([1, 2, 3, 4, 5].first())