const Morador = require('../resources/morador');
const cript = require('bcrypt');
const storage = require('localtoken');
const auth = require('../middleware/auth');

const mongoose = require('mongoose');
require('../models/entrada');
const modelo =  mongoose.model('entrada');





// logar no sistema
exports.getLogar =  async (req, res, next) => {
    try {
        return res.render('morador/_index', {danger: " "});
    } catch (err) {
        next(err);
    }
}



exports.postLogar =  async (req, res, next) => {
    try {
        const resultado = await Morador.validarEntrada(req.body);
        if(!resultado) {
            console.log("nickname ou nenha Invalido");
        
            //return res.render('morador/_index'); 
            return res.render('morador/_index', {danger: "nickname ou senha inválida"}); 
        }
        if(!await cript.compare(req.body.senha, resultado.senha1)) {   
            if(!await cript.compare(req.body.senha, resultado.senha2)){
                console.log("senha errada");
                return res.render('morador/_index', {danger: "senha inválida"});
                
            }
            else{
                console.log('perigo meu parceiro');
                const {nome} = await Morador.validarEntrada(req.body);

                var data = new Date()
                var dia =  data.getDate()
                var me  = data.getMonth()
                var mes = me + 1
                var ano = data.getFullYear()
                var ho = data.getHours()
                var hora = ho - 3
                var min = data.getMinutes()
                var sec = data.getSeconds()
                var minhaData = {
                dia: dia,
                mes: mes,
                ano: ano,
                hora: hora,
                min: min,
                sec: sec
                }
                var now2 = (minhaData.dia+"/"+minhaData.mes+"/"+minhaData.ano+" - "+minhaData.hora+":"+minhaData.min+":"+minhaData.sec)




                const meusDados = {nome: nome, data: now2, log: data}; 
                console.log(meusDados);
                await new  modelo(meusDados).save();
                     
            }
        }
        else{
            console.log('entrando normal');
        }
       
        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('morador', token);
        return res.redirect('/up');
    } catch (err) {
        next(err);
    }
}

exports.up = async (req, res, next) => {
    try {
        await storage.removeLocal('morador');
        return res.render('sucess/_index');
    } catch (err) {
        next(err);
    }
}


exports.getDeslogar = async (req, res, next) => {
    try {
       await storage.removeLocal('morador');
       return res.redirect('/');
    } catch (err) {
        next(err);
    }
}



// criar funcionario
exports.getCriar =  async (req, res, next) => {
    try {
        return res.render('register/_index', {danger: " ", danger2: " "});
    } catch (err) {
        next(err);
    }
}

exports.postCriar =  async (req, res, next) => {
    try {
       let resultado = await Morador.validarRegistro(req.body);
       if(!resultado){
           
           let morador = await Morador.criar(req.body);
            console.log(morador)
           return res.render('register/_index', {danger: " ", danger2: "registrado com sucesso"});
            
       } else {
           console.log('morador ja existe');
           return res.render('register/_index', {danger: "morador já existe",  danger2: " "});
       }
    } catch (err) {
        next(err);
    }
}

exports.buscarTodos = async (req, res, next) => {
    try {
        const todos = await Morador.buscarTodos();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
}
