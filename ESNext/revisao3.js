const produto = {
    nome: "Ferrrari",
    valor: 350_000,
    modelo: "F40"
}

// Object.values e Object.entries
console.log(Object.values(produto))
console.log(Object.keys(produto))
console.log(Object.entries(produto))

// Class
class Animal {}
class Lobo extends Animal{
    especificar(){
        return "Lobo!"
    }
}
console.log(new Lobo().especificar())