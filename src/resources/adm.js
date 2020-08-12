require('../models/adm');

const mongoose = require('mongoose');

const cript = require('bcrypt');
const salt = 10;

const modelo =  mongoose.model('adm');

class Adm  {
    static async criar(dados){
        let { senha } = dados;
        const hash = await cript.hash(senha, salt);
        senha = hash;
        dados.senha = senha;
        return await new  modelo(dados).save();
    }
    static async  validarRegistro(dados) {
        let { email } = dados;
        let adm = await modelo.findOne({email});
        return adm;
    }
    static async  validarEntrada(dados) {
        let { email } = dados;
        let adm = await modelo.findOne({email});
        return adm;
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

module.exports = Adm;