const { Router } = require("express");
const {
    newSerie,
    deletSerie,
    updateCaps,
} = require("../controllers/seriesControler.js");

const serieRouter = Router();

serieRouter.post("/:serieName/:caps/:userId", async (req, res) => { //  recibe por params los datos necesarios para crear una nueva serie en la base de datos
    const serieName = req.params.serieName.slice(1); //  utilizo el metodo slice para eliminar los ":" de los params
    const userId = req.params.userId.slice(1);
    const caps = req.params.caps.slice(1);

    try {
        let createNewSerie = await newSerie(serieName, caps, userId); //  envia la peticion al servidor y espera la respuesta
        res.status(200).send(createNewSerie);
    } catch (error) {
        res.status(400).send(error);
    }
});

serieRouter.patch("/:capId/:state", async (req, res) => { //  recibe el id del capitulo y el estado del check para
    const capId = req.params.capId.slice(1);             //  para modificarlo en la base de datos
    const state = req.params.state.slice(1);

    try {
        await updateCaps(capId, state);
        res.status(200);
    } catch (error) {
        res.status(400).send(error);
    }
});

serieRouter.delete("/:serieId/", async (req, res) => { //  recibe el id de la serie para eliminarla de la base de datos
    const serieId = req.params.serieId.slice(1);

    try {
        await deletSerie(serieId);
        res.status(200).send("serie creada");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = serieRouter;
