
const Cap = require("../models/chapters.js");
const Serie = require("../models/serie.js");

const newSerie = async (serieName, userId, caps) => {
    console.log(serieName, userId, caps);
    let newSerie = await Serie.create({serieName: serieName, createdBy: userId})
    for (let i = 1; i < caps; i++) {
        Cap.create({isCheck: false, serieId: newSerie.id})
    }
};

const updateCaps = async (capId, isCheck) => {
    let update = await Cap.update({ isCheck: !isCheck },{ where: { id: capId } });
    console.log(update);
};

const deletCaps = async (capId) => {
    let update = await Cap.drop({ where: { id: capId } });
    console.log(update);
};

module.exports = {newSerie, updateCaps, deletCaps};
