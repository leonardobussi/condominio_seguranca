'use strict'

module.exports = {
    server: {
        port: process.env.PORT || 3010,
    },
    database: {
        connection: 'aqui fica a string de conexao com o mongo' 
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}
