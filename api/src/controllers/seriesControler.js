const axios = require("axios");
/* const mysql = require('mysql')
 */const config = require ('../conection/config.js')

/* const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})
 */
const getSeries = async (user) => {
    let series = await db.query('select * from series')
    return series
};

const newSerie = async (user) => {
    await db.query('insert into series (serieName) values(?)');
    await db.query('insert into capitulos (name) values(?)')
};

module.exports = {newSerie, getSeries};
