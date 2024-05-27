const ferrari = {
    modelo: 'F40',
    velMax: 300
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Esta herdando de Object
console.log(ferrari.__proto__ === Object.prototype)