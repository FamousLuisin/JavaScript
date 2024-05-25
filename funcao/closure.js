// closure é o escopo criado quando uma função é delcarada
// Esse escopo permite a função a mmanipular e acessar varivaies externas a ela
const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    
    return dentro
}

const minhaFunc = fora()

console.log(minhaFunc())