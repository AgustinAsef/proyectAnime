const { Router } = require("express");
const { getUser, newUser } = require("../controllers/userControlers.js");

const userRouter = Router();
userRouter.get("/:email/:password", async (req, res) => {
    const userEmail = req.params.email.slice(1);
    const userPassword = req.params.password.slice(1);
    
    try {
        let dataDB = await getUser(userEmail, userPassword);
        res.status(200).send(dataDB);
    } catch (error) {
        res.status(400).send(error);
    }
});

userRouter.post("/:email/:password/:name", async (req, res) => {
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
