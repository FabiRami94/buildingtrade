
const deleteUser = require('../controllers/deleteUser');

const deteleUserHandler = async (req, res) => {
    const {name} = req.params
    try {
        const lessUser = await deleteUser(name);
        res.status(200).json(lessUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = deteleUserHandler;