const Sequelize = require ("../conection/sequelizeConetion.js") ;
const User = require("../models/user.js");
const Serie = require ("../models/serie.js")
const Caps = require ("../models/cap.js");


const getUser = async (userEmail, userPassword) => {

   let userWithSerie = await User.findOne({ //  recibe el id y la contrasena del usuario y lo busca con sus series
        attributes: ['id', 'email', 'userName'],
         include: [
          {
            model: Serie,
            attributes: ['id', 'serieName'],
            where: { createdBy: Sequelize.col('User.id') },
            include: [
              {
                model: Caps,
                attributes: ['id', 'isCheck', 'capNum'],
              }
            ]
          }
        ],
        where: {email:userEmail, password:userPassword}
      })
      if (userWithSerie == null) { //  si el usuario no tiene series asociadas trae solo los datos del usuario
        let onlyUser = await User.findOne({where: {email:userEmail, password:userPassword}})
        if (onlyUser == null) {
          return(error)
        }else{
          return(onlyUser)
        }
      } else {
        return(userWithSerie)
      }
};

const newUser = async (userEmail, userPassword, userName) => { //  agrega un usuario a la base de datos
    console.log(userEmail, userPassword,userName);
    let user = await User.findOne({where:{email: userEmail}})
    if (user == null) {
        let newUser = await User.create({email:userEmail, password:userPassword, userName:userName})
        return(newUser)
    }else{
        return(error)        
    }
};

module.exports = {
    getUser,
    newUser,
};
