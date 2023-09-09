const sqlConfig = {
    host: process.env.DBHost,
    user: process.env.DBUser,
    password: process.env.DBPassword,
    port: process.env.DBPort,
    database: process.env.DBName
  }

module.exports = sqlConfig