const express = require("express");
const bodyParser = require("body-parser")
const router = require("./src/routers/routes.js")
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors())
app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`Listen PORT: ${PORT}`);
})