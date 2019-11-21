require('dotenv').config();
require('module-alias/register');
const boot = require('@service/boot');
const config = require('@config');
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

if(config.db.connectionString){
    mongoose.connect(config.db.connectionString, boot)
    console.log('Conectado com sucesso !')
} else {
    console.log('No connection string provided')
}







