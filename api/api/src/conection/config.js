const sqlConfig = {
    host: process.env.DBHost || '192.168.1.63',
    user: process.env.DBUser || 'remoteuser',
    password: process.env.DBPassword || 'Frankie135',
    database: process.env.DBName || 'animeProject'
}

module.exports = sqlConfig