
const createUser = require('../controllers/createUser');

const createUserHandler = async (req, res) => {

    try {
        const { name, age} = req.body
        
        const newUser = await createUser( name, age);

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createUserHandler;