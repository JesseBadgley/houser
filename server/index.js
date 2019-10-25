require('dotenv').config()
const express = require('express')
const controller = require('./controller')
const massive = require ('massive')


const app = express()


const {SERVER_PORT, CONNECTION_STRING} = process.env
massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
},
console.log('db is working'))
.catch(err=>console.log(err))


app.use(express.json())


app.listen(SERVER_PORT, ()=> console.log(`I am listening on port ${SERVER_PORT} :-) `))