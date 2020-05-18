'use strict'

module.exports = {
    server: {
        port: process.env.port || 3000,
    },
    database: {
        connection: 'mongodb'
    },
    auth: {
        secret: 'c1c2c3c4c5'
    }
}