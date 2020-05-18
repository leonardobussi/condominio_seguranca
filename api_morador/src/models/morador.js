const smc = require('simple-mongoose-creator');

smc.smc('morador', {
    nickname: {
        type: String,
        required: true,
        trim: true,
    },
    nome: {
        type: String,
        require: true,
        trim: true 
    },
    numero: {
        type: Number,
        required: false,
            
    },
    bloco: {
        type: String,
        required: false, 
    },
    senha: {
        type: String,
        required: true,
        trim: true, 
    },
    senha1: {
        type: String,
        required: true,
        trim: true, 
    }
});

module.exports = smc;