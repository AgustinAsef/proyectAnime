const Sequelize = require ("../conection/sequelizeConetion.js") ;
const cap = require("../models/cap.js");
const serie = require("../models/serie.js");

const newSerie = async (serieName, caps, userId) => {
    let newSerie = await serie.create({
        serieName: serieName,
        createdBy: userId,
    });
        for (let i = 1; i <= caps; i++) {
            await cap.create({ serieId:newSerie.id, capNum:i });
        }
        let userNewSerie = await serie.findOne({
            attributes: ['id', 'serieName'],
            where: { createdBy: Sequelize.col('User.id') },
            include: [
              {
                model: cap,
                attributes: ['id', 'isCheck', 'capNum'],
              }
            ],
            where: {id: newSerie.id}
        })
        return (userNewSerie); 
};

const updateCaps = async (capId, state) => {
    let changeState = state != 0 ? 0 : 1;

    let update = await cap.update(
        { isCheck: changeState },
        { where: { id: capId } }
    );
    return update;
};

const deletSerie = async (serieId) => {
    await cap.destroy({ where: { serieId:serieId } });
    await serie.destroy({ where: { id:serieId } });
};

module.exports = { newSerie, updateCaps, deletSerie };
