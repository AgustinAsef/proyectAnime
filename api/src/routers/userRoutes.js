const { Router } = require("express");
const { getUser, newUser } = require("../controllers/userControlers.js");

const userRouter = Router();
userRouter.get("/:email/:password", async (req, res) => {
    const userEmail = req.params.email.slice(1);
    const userPassword = req.params.password.slice(1);
    console.log(userEmail, userPassword);
    if (userEmail && userPassword) {
      try {
        let dataDB = await getUser(userEmail, userPassword)
        res.status(200).send(dataDB);
      } catch (error) {
        if (error.response) {
          res.status(400).send(error.response.data);
        } 
      }  
    } else {
        res.status(400).send("el mail o la contrasenas son incorrectos");
    }
});

userRouter.post("/:email/:password/:name", async (req, res) => {
    const userEmail = req.params.email.slice(1);
    const userPassword = req.params.password.slice(1);
    const userName = req.params.name.slice(1);
    try {
        const user = await newUser(userEmail, userPassword, userName);
        res.status(200).send("ussuario creado con exito");
    } catch (error) {
        res.status(400).send("este correo ya existe");
    }
});

module.exports = userRouter;
