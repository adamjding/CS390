require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
process.env.DATABASE_URL = 'mongodb://localhost/mydb'
console.log(process.env.DATABASE_URL)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000, () => console.log('server started'))