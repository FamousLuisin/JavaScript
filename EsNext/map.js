const tecnologias = new Map ([
    ['vue', {framework: true}],
])

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias)

console.log()

console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular'))