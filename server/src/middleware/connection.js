'use strict'

const mongoose = require('mongoose');
const keys = require('../../bin/keys');

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

module.exports.connect = () => {
    mongoose.connect(keys.database.connection, err => {
        if(err) {
            console.log('==> [-] mongodb');
        } else {
            console.log('==> [+] mongodb');
        }
    }, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        UseCreateIndexes: true
        });
}
