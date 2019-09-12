var express = require('express')
var bp = require('body-parser')
var server = express()
var cors = require('cors')
//SETS THE PORT TO HEROKU's 
var port = process.env.PORT || 3000

var whitelist = ['http://localhost:8080'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
server.use(cors(corsOptions))
//SET THE FRONT END
// server.use(express.static(__dirname + '/../client/dist'))

//Fire up database connection
require('./db/gearhost-config')


//REGISTER MIDDLEWEAR
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//REGISTER YOUR AUTH ROUTES BEFORE YOUR GATEKEEPER, OTHERWISE YOU WILL NEVER GET LOGGED IN
let auth = require('./auth/routes')
server.use(auth.session)
server.use(auth.router)

//Public routes here


//Gate Keeper Must login to access any route below this code
server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({
      error: 'please login to continue'
    })
  }
  next()
})

// let distributorRoutes = require('./server-assets/routes/distributor')
// let pets = require('./server-assets/routes/pet')
// let notes = require('./server-assets/routes/note')
// let timeCard = require('./server-assets/routes/timeCard')


//middlewear adds the identityId to every post request
server.use('*', (req, res, next) => {
  if (req.method == "POST") {
    req.body.identityId = req.session.uid
  }
  next()
})


//customer routes
//api/customer


//must be logged in and be an employee to access the employee routes
server.use('api/distributor', (req, res, next) => {
  if (!req.session.isDistributor) {
    return res.status(401).send({
      error: 'Unathorized'
    })
  }
  next()
})

//  
// server.use('/api/employee', pets)
// server.use('/api/employee', notes)
// server.use('/api/employee', timeCard)






//Catch All
server.use('*', (err, req, res, next) => {
  res.status(500).send(err)
})
server.use('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


server.listen(port, () => {
  console.log('YOU DID IT!!!', port)
})
