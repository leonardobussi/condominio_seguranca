const smc = require('simple-mongoose-creator');

smc.smc('entrada', {
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    data: {
        type: Date,
        required: false,
    }
});

module.exports = smc;