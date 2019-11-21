const express = require('express');
const routes = require('./routes');
const app = express();
const sendError= require("@helper/sendError");
const rateLimit = require('@middleware/rateLimit');

app.use(express.urlencoded({extended: true })); // necessário para ter acesso
app.use(express.json());  // ao request.body

app.use(sendError); //deve ser sempre antes das rotas

app.use(...rateLimit); // como exportei em array uso os 3 pontos para executar os 2

app.use('/', routes);

module.exports = app;


