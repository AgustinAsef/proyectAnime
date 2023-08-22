const axios = require("axios");
/* const mysql = require("mysql");
 */const config = require("../conection/config.js");

/* const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
}); 

const getUser = async () => {
    try {
        let user = await axios.get(`${user}`);
        return user;
    } catch (error) {
        console.log(error);
    }
};

const newUser = async () => {
    try {
        await db.query("insert into users ( name ) values (?)");
        return "Usuario creado con exito.";
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getUser,
    newUser,
};
*/