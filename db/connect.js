const { Pool } = require("pg")

const pool = new Pool({
  database: "todo_database",
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgresql0312",
})

module.exports = pool
