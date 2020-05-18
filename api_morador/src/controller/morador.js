const Morador = require('../resources/morador');
const cript = require('bcrypt');
const storage = require('localtoken');
const auth = require('../middleware/auth');


// logar no sistema
exports.getLogar =  async (req, res, next) => {
    try {
        return res.send('logado');
    } catch (err) {
        next(err);
    }
}

exports.postLogar =  async (req, res, next) => {
    try {
        const resultado = await Morador.validarEntrada(req.body);
        if(!resultado) {
            return res.send('morador não existe');
        }
        if(!await cript.compare(req.body.senha, resultado.senha)) {
            if(!await cript.compare(req.body.senha, resultado.senha1)){
                return res.send('senha incorreta');
            }
            else{
                console.log('perigo meu parceiro');
            }
        }

        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('morador', token);
        return res.send('pode entrar')
    } catch (err) {
        next(err);
    }
}


// criar morador
exports.getCriar =  async (req, res, next) => {
    try {
        return res.send('morador criado');
    } catch (err) {
        next(err);
    }
}

exports.postCriar =  async (req, res, next) => {
    try {
       let resultado = await Morador.validarRegistro(req.body);
       if(!resultado){
           let Morador = await Morador.criar(req.body);
           return res.send('criado morador');
       } else {
           console.log('morador ja existe');
           return res.send('tentar novemente');
       }
    } catch (err) {
        next(err);
    }
}

