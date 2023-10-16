
const createUser = require('../controllers/createUser');

const createUserHandler = async (req, res) => {

    try {
        const { name, email, message} = req.body
        
        const newUser = await createUser( name, email, message);

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createUserHandler;