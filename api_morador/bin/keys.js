'use strict'

module.exports = {
    server: {
        port: process.env.port || 3000,
    },
    database: {
        connection: 'mongodb+srv://portaria:portaria@cluster0-e2g2g.mongodb.net/teste?retryWrites=true&w=majority' //|| 'mongodb://127.0.0.1:27017',
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}