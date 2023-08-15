const { Router } = require("express");

const { getUser, newUser } = require("../controllers/userControlers.js");

const userRouter = Router();

userRouter.get("/", async (req, res) => {

  const {mail, pasword } = req.body
  if (!mail || !pasword) { res.status(404).send('faltan valores necesarios') }

  try {
    const user = await getUser(name, lastName, mail );
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

userRouter.post("/", async (req, res) => {
  const {name, lastName, mail } = req.body
  if (!name || !lastName || !mail) { res.status(404).send('faltan valores necesarios') }
  
  try {
    const user = await newUser();
    res.status(200).send("ussuario creado con exito");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = userRouter;
