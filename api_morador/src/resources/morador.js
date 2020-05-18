require('../models/morador');
const mongoose = require('mongoose');
const modelo =  mongoose.model('morador');
const cript = require('bcrypt');
const salt = 10;


class Morador  {

    static async criar(dados){
        let { senha, senha1 } = dados;
        const hash = await cript.hash(senha, salt);
        const hash1 = await cript.hash(senha1, salt); // (senha, salt) para (senha1, salt) 
        senha = hash;
        senha1 = hash1; 
        dados.senha = senha;
        dados.senha1 = senha1;
        return await new  modelo(dados).save();
    }
    static async  validarRegistro(dados) {
        let { nickname } = dados;
        let morador = await modelo.findOne({nickname});
        return morador;
    }
    static async  validarEntrada(dados) {
        let { nickname } = dados;
        let morador = await modelo.findOne({nickname});
        return morador;
    }
    
}

module.exports = Morador;