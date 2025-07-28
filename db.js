const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",          
  host: "localhost",
  database: "student_db",
  password: "1998",
  port: 5432,
});

module.exports = pool;

