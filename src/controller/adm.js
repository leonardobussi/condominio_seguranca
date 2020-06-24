const cript = require('bcrypt'); 
const storage = require('localtoken');

const Adm = require('../resources/adm');
const auth = require('../middleware/auth');


require('../models/entrada');
const mongoose = require('mongoose');
const modelo =  mongoose.model('entrada');


// logar no sistema
exports.getLogar =  async (req, res, next) => {
    try {
        return res.render('login/_index', {danger: " "});
    } catch (err) {
        next(err);
    }
}

exports.postLogar =  async (req, res, next) => {
    try {
        const resultado = await Adm.validarEntrada(req.body);
        if(!resultado) {
            console.log('conta nao encontrada');
            return res.render('login/_index', {danger: "E-mail ou Senha inválido"});
            
        }
        if(!await cript.compare(req.body.senha, resultado.senha)) {
            console.log('senha do adm incorreto');
            return res.render('login/_index', {danger: "E-mail ou Senha inválido"});
            
        }

        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('login', token);
        return res.redirect('painel');


    } catch (err) {
        next(err);
    }
}

exports.getPainel = async (req, res, next) => {
    try {
        const dados = await modelo.find({});
        dados.reverse()
        console.log(dados);
        return res.render('painel/_index',{dados: dados}); 
        

    } catch (err) {
        next(err)
    }
}

exports.postPainel = async (req, res, next) => {
    try {
       return res.render('painel/_index');
    } catch (err) {
        next(err)
    }
}

exports.getDeslogar = async (req, res, next) => {
    try {
       await storage.removeLocal('login');
       console.log('deslogado');
       return res.redirect('/adm/logar');  
    } catch (err) {
        next(err);
    }
}



// criar funcionario
exports.getCriar =  async (req, res, next) => {
    try {
        return res.render('registerAdm/_index', {danger: " ", danger2: " "});
    } catch (err) {
        next(err);
    }
}

exports.postCriar =  async (req, res, next) => {
    try {
       let resultado = await Adm.validarRegistro(req.body);
       if(!resultado){
           let adm = await Adm.criar(req.body);
           console.log(adm)
           return res.render('registerAdm/_index', {danger: " ", danger2: "registrado com sucesso"});
       } else {
        console.log('adm ja existe');
        return res.render('registerAdm/_index', {danger: "morador já existe",  danger2: " "});
       }
    } catch (err) {
        next(err);
    }
}

exports.buscarTodos = async (req, res, next) => {
    try {
        const todos = await Adm.buscarTodos();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}