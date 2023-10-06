const express = require('express');
const morgan = require('morgan');
const router =  require('./routes/index');
const cors = require('cors');

const server = express();

server.use(morgan('dev'));
server.use(cors());
server.use(express.json())

server.use('/buildingtrade', router);

module.exports = server;