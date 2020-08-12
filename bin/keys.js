'use strict'

module.exports = {
    server: {
        port: process.env.PORT || 3000,
    },
    database: {
        connection: 'mongodb+srv://rpg:rpg@cluster0.0ddez.mongodb.net/portaria?retryWrites=true&w=majority' 
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}
