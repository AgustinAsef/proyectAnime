const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/routers/routes.js");
const sequelize = require("./src/conection/sequelizeConetion.js")
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: true })); //  configuraciones generales
app.use(express.json());
app.use(cors());
app.use("/", router);

app.get("/", (req, res)=>{
    res.status(200).send("api lista")
})
app.listen(PORT, async () => { //  coneccion con el servidor y levantamiento en el puerto
    try {
        await sequelize.authenticate();
        console.log(`Listen PORT: ${PORT}`);
    } catch (error) {
        console.log(error);
    }
});
