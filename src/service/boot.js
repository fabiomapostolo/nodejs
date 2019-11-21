const app = require('@app');
const config = require('@config');

module.exports = (err) => {
    console.clear();
    if(err){
        console.log('Erro ao conectar ao Banco de Dados!')
    }
    app.listen(config.app.port, (err) => {
        if (err) {
            return console.log('erro')   
        }
        console.log(`servidor iniciado em http://localhost: ${config.app.port}`);
    });    
};

