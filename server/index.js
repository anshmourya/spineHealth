require("dotenv").config()
const express = require('express')
const app = express()
const port = 4000

//setting up the cors middleware
const cors = require("cors")


app.use(cors({ credentials: true, origin: true }));

app.use(express.json())
//router routes
const patients = require("./routes/patient")
const visit = require("./routes/visit")
const User = require("./auth/user")




//login
app.use(User)

//patients routes
app.use(patients);

//visit route
app.use(visit)




app.get('/', (req, res) => res.send(process.env.CLIENT_URL))
app.listen(port, () => console.log(`SpineHealth app listening on port ${process.env.port || port}!`)) 