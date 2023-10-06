const {Router} = require('express');
const createUserHandler = require('../handlers/createUserHandler');
const deteleUserHandler = require('../handlers/deleteUserHandler');

const router = Router();

router.post('/createuser', createUserHandler);

router.get('/users', );

router.delete('/deleteuser/:name', deteleUserHandler);

module.exports = router;