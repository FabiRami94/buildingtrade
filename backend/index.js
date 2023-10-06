
const server = require('./src/app');
require('dotenv').config();
const {PORT} = process.env;
const mongoose = require('./src/bd');


mongoose.connection.once('open', () => {
    console.log('Mongo iniciado')
});
    
server.listen(PORT, () => {
    console.log('Server iniciado');
});
