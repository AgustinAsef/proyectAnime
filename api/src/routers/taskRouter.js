const { Router } = require("express");
const { newSerie, getSeries } = require("../controllers/taskControler.js");

const serieRouter = Router();

serieRouter.get("/", async (req, res) => {
    const userId = req.body;
    try {
        let data = await getSeries(userId);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

serieRouter.post("/", async (req, res) => {
    const { serieName, etc } = req.body;
    try {
        let createNewSerie = await newSerie(serieName, etc);
        res.status(200).send(createNewSerie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = serieRouter;