const { Router } = require("express");
const { newSerie, getSeries } = require("../controllers/seriesControler.js");

const serieRouter = Router();

serieRouter.post("/:serieName/:userId/:caps", async (req, res) => {
    const serieName = req.params.email.slice(1);
    const userId = req.params.password.slice(1);
    const caps = req.params.name.slice(1);
    try {
        let createNewSerie = await newSerie(serieName, userId, caps);
        res.status(200).send(createNewSerie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

serieRouter.delete("/:serieId", async (req, res) => {
    const { serieName, etc } = req.body;
    try {
        let createNewSerie = await deleteSeroe(serieName, etc);
        res.status(200).send(createNewSerie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = serieRouter;