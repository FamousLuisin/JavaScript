let prom = new Promise(function (resolve){
    resolve([
        {marca: "Porsche", modelo: "Panameira"}, 
        {marca: "Ferrari", modelo: "Spider"}, 
        {marca: "BMW", modelo: "320i"}
    ])
})

function primeiroElemento(array){
    return array[0]
}

function porsche(carro){
    return carro.marca === "Porsche" ? carro : false
}

function ferrari(carro){
    return carro.marca === "Ferrari" ? carro : false
}

prom.then(primeiroElemento)
    .then(porsche)
    .then(console.log)