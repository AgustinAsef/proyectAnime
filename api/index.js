const express = require("express");
const router = require('./src/routers/routes.js')

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'localhost');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  });

app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`Listen PORT: ${PORT}`);
})