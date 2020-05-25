const smc = require('simple-mongoose-creator');

smc.smc('adm', {
    email: {
        type: String,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: false, 
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    },
    
});

module.exports = smc;