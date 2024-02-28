require('dotenv').config()
const mongoose = require('mongoose')

const mongoString = process.env.DB_URL
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error: any) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})