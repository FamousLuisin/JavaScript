const schedule = require('node-schedule');

// Executar de 5 em 5 seg as 14 horas em qualquer minuto de uma terça
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', () => {
    console.log("Executando tarefa 1: " + new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 90000)

const regra = new schedule.RecurrenceRule()
// Dia da semana de segunda a sexta
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log("Executando tarefa 2: " + new Date().getSeconds())
})