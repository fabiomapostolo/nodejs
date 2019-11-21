module.exports = {
    app: {
        port: process.env.PORT || 4000,  // || - operador  OU, se não achar vai para a 4000
    },
    db: {
        connectionString: process.env.MONGO_DB,

    },
    requests: {
        roteLimit: {
            window: 20 * 60 * 1000, //milisegundo - ms
            max: 150,
        },
        slowDown: {
            window: 15 * 60 * 1000, //milisegundo - ms
            delayAfter: 100,
            delayMS: 100,
        },
    },
};