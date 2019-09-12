var mongoose = require('mongoose')
var connectionString = "mongodb://arf:arfarf!@den1.mongo1.gear.host:27001/arf"
var connection = mongoose.connection


mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('SUCCESS!!!')
})
