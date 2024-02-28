let dotenv = require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
    user: dotenv.parsed.USER,
    host: dotenv.parsed.HOST,
    database: dotenv.parsed.DATABASE,
    password: dotenv.parsed.PASSWORD,
    port: 5432
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows) 
    })
  }

  module.exports = {
    getUsers
  }