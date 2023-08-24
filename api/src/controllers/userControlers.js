const Sequelize = require ("../conection/sequelizeConetion.js") ;
const User = require("../models/user.js");
const Serie = require ("../models/serie.js")
const Chapter = require ("../models/chapters.js");


const getUser = async (userEmail, userPassword) => {

   let user = await User.findOne({
        attributes: ['id', 'email', 'userName'],
         include: [
          {
            model: Serie,
            attributes: ['id', 'serieName'],
            where: { createdBy: Sequelize.col('User.id') },
           include: [
              {
                model: Chapter,
                attributes: ['id', 'isCheck'],
              }
            ]
          }
        ],
        //hacer 2 consultas es una opcion
        where: {email:userEmail, password:userPassword}
      })
      .then(user => {
        if (user) {
            
          console.log('Usuario encontrado:', user.toJSON());
          return user
        } else {
          console.log('Usuario no encontrado.');
        }
      })
      .catch(error => {
        console.error('Error al buscar usuario:', error);
      });
};

const newUser = async (userEmail, userPassword, userName) => {
    console.log(userEmail, userPassword,userName);
    let user = await User.findOne({where:{email: userEmail}})
    console.log(user, 'este es el user');
    if (user == null) {
        console.log('usuario creado con exito');
        let newUser = await User.create({email:userEmail, password:userPassword, userName:userName})
        console.log(newUser);
    }else{
        console.log('este usuario ya existe');        
    }
};

module.exports = {
    getUser,
    newUser,
};
