const User = require("../models/usuarios.js");

const getUser = async (userEmail, userPassword) => {
    console.log(userEmail);
    console.log(userPassword);

    let user = await User.findOne({where:{email: userEmail, password: userPassword}})
    if (user == null) {
        console.log('no encontrado');
        return(error)
    }else{
        console.log(user);
        
        
        }
};

const newUser = async (userEmail, userPassword, userName) => {
    const date = new Date
    let user = User.findOne({where:{email: userEmail}})
    if (user == null) {
        User.create({email: userEmail, password: userPassword, userName: userName, createdAt: date, updateAt: date})
    }else{
        'este usuario ya existe'
    }
};

module.exports = {
    getUser,
    newUser,
};
