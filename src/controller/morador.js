const Morador = require('../resources/morador');
const cript = require('bcrypt');
const storage = require('localtoken');
const auth = require('../middleware/auth');

const flash = require('connect-flash')




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
            console.log("Email Incorreta");
        
            //return res.render('morador/_index'); 
            return res.render('morador/_index', {danger: "E-mail ou Senha inválido"}); 
        }
        if(!await cript.compare(req.body.senha, resultado.senha1)) {
            console.log("senha errada");
            if(!await cript.compare(req.body.senha, resultado.senha2)){
                
                return res.render('morador/_index', {danger: "E-mail ou Senha inválido"});
                
            }
            else{
                console.log('perigo meu parceiro');
                //return res.render('morador/_index');
               
            }
        }
       
        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('morador', token);
        console.log("entrando normal");
        //return res.send("bem vindo");
        return res.redirect('/up');
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
        return res.render('register/_index');
    } catch (err) {
        next(err);
    }
}

exports.postCriar =  async (req, res, next) => {
    try {
       let resultado = await Morador.validarRegistro(req.body);
       if(!resultado){
           let morador = await Morador.criar(req.body);
           return res.render('register/_index');
       } else {
           console.log('morador ja existe');
           return res.redirect('criar');
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
