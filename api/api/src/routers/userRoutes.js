const { Router } = require("express");
const { getUser, newUser } = require("../controllers/userControlers.js");

const userRouter = Router();
userRouter.get("/:email/:password", async (req, res) => { //  recibe email y contrasena para buscar el usuario en la base de datos
    const userEmail = req.params.email.slice(1); //  utiliza el metodo slice para eliminar los ":" de los params
    const userPassword = req.params.password.slice(1);
    
    try {
        let dataDB = await getUser(userEmail, userPassword); //  manda la consulta al controler
        res.status(200).send(dataDB);
    } catch (error) {
        res.status(400).send(error);
    }
});

userRouter.post("/:email/:password/:name", async (req, res) => { //  recibe los parametros para crear un nuevo usuario
    const userEmail = req.params.email.slice(1);
    const userPassword = req.params.password.slice(1);
    const userName = req.params.name.slice(1);

    try {
        const user = await newUser(userEmail, userPassword, userName);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = userRouter;
