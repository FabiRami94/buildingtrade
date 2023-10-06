
const userModel = require('../schemas/schemas')

const deleteUser = async (name) => {

    const existingUser = await userModel.findOne({name}).exec();

    if(!existingUser){ throw new Error('No existe ese usuario.')};

    const lessUser = await userModel.deleteOne(existingUser);

    return lessUser;
}

module.exports = deleteUser;