const { Client } = require('pg')

const client = new Client(process.env.DATABASE_URL)

/*
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "admin",
    database: "oceniautobus"
})
*/

module.exports = client