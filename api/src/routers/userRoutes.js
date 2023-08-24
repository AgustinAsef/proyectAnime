const { Router } = require("express");

const { getUser, newUser } = require("../controllers/userControlers.js");
const { json } = require("body-parser");

const userRouter = Router();
/* const data = {
    id: 1,
    userName: "agustin",
    userMail: ":agustin@gmail.com",
    userPasword: ":asdasdasd",
    series: [
        {
            id: "NeonGenesisEvangelion",
            serieName: "Neon Genesis Evangelion",
            show: "notShow",
            seasons: [
                {
                    id: 1,
                    seasonName: "Neon Genesis Evangelion Cap. 1",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: false,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: false,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: false,
                        },
                        {
                            id: 7,
                            number: 7,
                            isCheck: false,
                        },
                    ],
                },
                {
                    id: "NeonGenesisEvangelion:TheEndofEvangelion",
                    seasonName:
                        "Neon Genesis Evangelion: The End of Evangelion",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: false,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: false,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: false,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: false,
                        },
                        {
                            id: 7,
                            number: 7,
                            isCheck: false,
                        },
                        {
                            id: 8,
                            number: 8,
                            isCheck: true,
                        },
                        {
                            id: 9,
                            number: 9,
                            isCheck: true,
                        },
                    ],
                },
            ],
        },
        {
            id: "NanatsunoTaizai",
            serieName: "Nanatsu no Taizai",
            seasons: [
                {
                    id: "SeisennoShirushi",
                    seasonName: "Seisen no Shirushi",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: true,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: true,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: true,
                        },
                        {
                            id: 7,
                            number: 7,
                            isCheck: true,
                        },
                        {
                            id: 8,
                            number: 8,
                            isCheck: true,
                        },
                        {
                            id: 9,
                            number: 9,
                            isCheck: true,
                        },
                        {
                            id: 0,
                            number: 10,
                            isCheck: true,
                        },
                        {
                            id: 1,
                            number: 11,
                            isCheck: true,
                        },
                    ],
                },
                {
                    id: "KamigaminoGekirin",
                    seasonName: "Kamigami no Gekirin",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: true,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: true,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: true,
                        },
                    ],
                },
                {
                    id: "FundonoShinpan",
                    seasonName: "Fundo no Shinpan",
                    caps: [
                        { id: 1, number: 1, isCheck: true },
                        {
                            id: 2,
                            number: 2,
                            isCheck: true,
                        },
                        {
                            id: 3,
                            number: 3,
                            isCheck: true,
                        },
                        {
                            id: 4,
                            number: 4,
                            isCheck: true,
                        },
                        {
                            id: 5,
                            number: 5,
                            isCheck: true,
                        },
                        {
                            id: 6,
                            number: 6,
                            isCheck: true,
                        },
                    ],
                },
            ],
        },
    ],
};
 */
userRouter.get("/:email/:password", async (req, res) => {
    const userEmail = req.params.email.slice(1);
    const userPassword = req.params.password.slice(1);
    console.log(userEmail, userPassword);
    if (userEmail && userPassword) {
      try {
        let dataDB = getUser(userEmail, userPassword)
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

userRouter.post("/", async (req, res) => {
    const { userName, userEmail, userPassword } = req.body.userInfo;
    console.log(req.body);
    try {
        const user = await newUser(userName, userEmail, userPassword);
        res.status(200).send("ussuario creado con exito");
    } catch (error) {
        res.status(400).send("este correo ya existe");
    }
});

module.exports = userRouter;
