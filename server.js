const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Hello World');
})

app.listen(4000, (err) => {
    if (err) {
        return console.log('erro')   
    }
    console.log('servidor iniciado em http://localhost')
});