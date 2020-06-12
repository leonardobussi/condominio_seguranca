const storage = require('localtoken');
const jwt = require('jsonwebtoken');

const keys = require('../../bin/keys');

exports.autorizar = async (req, res, next) => {
    try {
        const token = await storage.getInLocal('login');
        if(!token){
            return res.redirect('/adm/logar');   //send('permissao negada');

        }
        return next();
    } catch (err) {
        next(err);
    }
}

exports.autorizarMorador = async (req, res, next) => {
    try {
        const token = await storage.getInLocal('morador');
        if(!token){
            return res.redirect('/');   //send('permissao negada');

        }
        return next();
    } catch (err) {
        next(err);
    }
}

exports.gerarToken = async (dados) => {
    return await jwt.sign(dados, keys.auth.secret);
}

exports.decodificar = async (token) => {
    const dados = await jwt.decode(token, keys.auth.secret);
    return dados;
} 