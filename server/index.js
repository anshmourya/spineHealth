require("dotenv").config()
const express = require('express')
const app = express()
const port = 4000

//setting up the cors middleware
const cors = require("cors")
app.use(cors({
    origin: process.env.CLIENT_URL
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true'); // Set the header to 'true'
    next();
});

app.use(express.json())

//router routes
const patients = require("./routes/patient")
const visit = require("./routes/visit")

//patients routes
app.use(patients);

//visit route
app.use(visit)




app.get('/', (req, res) => res.send(process.env.CLIENT_URL))
app.listen(port, () => console.log(`SpineHealth app listening on port ${process.env.port || port}!`)) 