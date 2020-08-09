require('../models/morador');
const mongoose = require('mongoose');
const modelo =  mongoose.model('morador');
const cript = require('bcrypt');
const salt = 10;


class Morador  {

    static async criar(dados){
        let { senha1, senha2 } = dados;
        const hash = await cript.hash(senha1, salt);
        const hash1 = await cript.hash(senha2, salt); // (senha, salt) para (senha1, salt) 
        senha1 = hash;
        senha2 = hash1; 
        dados.senha1 = senha1;
        dados.senha2 = senha2;
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
    static async  buscarTodos() {
        return await modelo.find({});
    }
    static async  buscarPorID(id) {
        return await modelo.findOne({_id: id});
    }
    static async  atualizar(id, dados) {
        return await modelo.findOneAndUpdate(id, {$set: dados});
    }
    static async  deletar(id) {
        return await modelo.findOneAndRemove(id);
    }
}

module.exports = Morador;