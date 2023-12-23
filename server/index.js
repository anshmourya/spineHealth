require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

//setting up the cors middleware

const cors = require('cors')
app.set('trust proxy', 1)
app.use(
  cors({ credentials: true, origin: true, exposedHeaders: ['Set-Cookie'] }),
)
// enable the "secure" flag on the sessionCookies object

app.use(express.json())
//router routes

const patients = require('./routes/patient')
const visit = require('./routes/visit')
const User = require('./auth/user')
const BulkData = require('./routes/BulkData')

//login
app.use(User)

//patients routes
app.use(patients)

//visit route
app.use(visit)

//bulk data
app.use(BulkData)

app.get('/', (req, res) => res.send(process.env.CLIENT_URL))
app.listen(port, () =>
  console.log(`SpineHealth app listening on port ${process.env.port || port}!`),
)
