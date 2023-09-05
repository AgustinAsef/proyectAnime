const { Router } = require("express");
const {
    newSerie,
    deletSerie,
    updateCaps,
} = require("../controllers/seriesControler.js");

const serieRouter = Router();

serieRouter.post("/:serieName/:caps/:userId", async (req, res) => {
    const serieName = req.params.serieName.slice(1);
    const userId = req.params.userId.slice(1);
    const caps = req.params.caps.slice(1);

    try {
        let createNewSerie = await newSerie(serieName, caps, userId);
        res.status(200).send(createNewSerie);
    } catch (error) {
        res.status(400).send(error);
    }
});

serieRouter.patch("/:capId/:state", async (req, res) => {
    const capId = req.params.capId.slice(1);
    const state = req.params.state.slice(1);

    try {
        await updateCaps(capId, state);
        res.status(200);
    } catch (error) {
        res.status(400).send(error);
    }
});

serieRouter.delete("/:serieId/", async (req, res) => {
    const serieId = req.params.serieId.slice(1);

    try {
        await deletSerie(serieId);
        res.status(200).send("serie creada");
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = serieRouter;
