
const userModel = require('../schemas/schemas')

const createUser = async ( name, age) => {

    const existingUser = await userModel.findOne({name}).exec();

    if(existingUser){ throw new Error('El usuario ya se encuentra registrado.')};

    const newUser = new userModel({ name, age});

    await newUser.save();

    return newUser;
}

module.exports = createUser;