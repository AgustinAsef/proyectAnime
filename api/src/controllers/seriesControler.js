const Sequelize = require ("../conection/sequelizeConetion.js") ;
const cap = require("../models/cap.js");
const serie = require("../models/serie.js");

const newSerie = async (serieName, caps, userId) => {

    let newSerie = await serie.create({ //  envio de informacion a la base de datos para crear usuario
        serieName: serieName,
        createdBy: userId,
    });

    for (let i = 1; i <= caps; i++) { //  bucle para crecion de capitulos como sean necesarios para cada serie
        await cap.create({ serieId:newSerie.id, capNum:i });
    }

    let userNewSerie = await serie.findOne({ //  consulta para retornar la serie recien creada con sus capitulos
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

const updateCaps = async (capId, state) => { //  modifica el estado del check que recibe y lo envia a la base de datos 
    let changeState = state != 0 ? 0 : 1;   //  para modificar el capitulo

    let update = await cap.update(
        { isCheck: changeState },
        { where: { id: capId } }
    );
    return update;
};

const deletSerie = async (serieId) => { //  elimina primero los capitulos y luego la serie que le corresponda al id que recibe
    await cap.destroy({ where: { serieId:serieId } });
    await serie.destroy({ where: { id:serieId } });
};

module.exports = { newSerie, updateCaps, deletSerie };
