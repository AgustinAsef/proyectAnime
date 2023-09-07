const express = require("express");
const bodyParser = require("body-parser")
const router = require("./src/routers/routes.js")
const sqlConfig = require("./src/conection/config.js")
const {Sequelize } = require ('sequelize')
const cors = require("cors")

const sequelize = new Sequelize( //  importacion de la configuracion a la base de datos y seteo de la misma
    sqlConfig.database,
    sqlConfig.user,
    sqlConfig.password,
    {
        host: sqlConfig.host,
        dialect:'mysql',
    }
);

const app = express();

const PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({extended:true})) //  configuraciones generales
app.use(express.json());
app.use(cors())
app.use('/', router)

app.listen(PORT, async ()=>{ //  coneccion con el servidor y levantamiento en el puerto
    console.log(`Listen PORT: ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
)