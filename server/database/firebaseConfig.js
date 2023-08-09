//configure of the fireabse
const firebase = require("firebase-admin");

//config file 
const configure = require("./Config.js");

firebase.initializeApp({
    credential: firebase.credential.cert(configure),

})

const db = firebase.firestore();

let user = db.collection("user");


module.exports = user;
