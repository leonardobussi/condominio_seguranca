const Morador = require('../resources/morador');
const cript = require('bcrypt');
const storage = require('localtoken');
const auth = require('../middleware/auth');


// logar no sistema
exports.getLogar =  async (req, res, next) => {
    try {
        return res.render('morador/_index');
    } catch (err) {
        next(err);
    }
}

exports.postLogar =  async (req, res, next) => {
    try {
        const resultado = await Morador.validarEntrada(req.body);
        if(!resultado) {
            return res.render('morador/_index'); 
        }
        if(!await cript.compare(req.body.senha, resultado.senha1)) {
            if(!await cript.compare(req.body.senha, resultado.senha2)){
                return res.render('morador/_index');
            }
            else{
                console.log('perigo meu parceiro');
            }
        }

        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('morador', token);
        console.log("entrando normal");
        return res.redirect('/');
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
