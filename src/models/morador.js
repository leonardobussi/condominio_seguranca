const smc = require('simple-mongoose-creator');

smc.smc('morador', {
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    nickname: {
        type: String,
        required: true,
        trim: true
    },
    numero: {
        type: Number,
        required: true,
            
    },
    bloco: {
        type: String,
        required: true, 
    },
    senha1: {
        type: String,
        required: true,
        trim: true, 
    },
    senha2: {
        type: String,
        required: true,
        trim: true, 
    }
});

module.exports = smc;