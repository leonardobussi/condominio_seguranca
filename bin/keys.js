'use strict'

module.exports = {
    server: {
        port: process.env.PORT || 3000,
    },
    database: {
        connection: 'mongodb+srv://portaria:portaria@cluster0-e2g2g.mongodb.net/teste?retryWrites=true&w=majority' 
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}
