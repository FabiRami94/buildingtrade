
const userModel = require('../schemas/schemas')

const createUser = async ( name, email, message) => {

    const existingUser = await userModel.findOne({name}).exec();

    if(existingUser){ throw new Error('El usuario ya se encuentra registrado.')};

    const newUser = new userModel({ name, email, message});

    await newUser.save();

    return newUser;
}

module.exports = createUser;