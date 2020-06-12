const Adm = require('../controller/adm');
const auth = require('../middleware/auth');
const Morador = require('../controller/morador');

const express = require('express');
const router = express.Router();

router.get('/', auth.autorizar, Adm.getCriar);
router.post('/', Adm.postCriar);

router.get('/deslogar', Adm.getDeslogar);
router.get('/todos', auth.autorizar, Adm.buscarTodos);

router.get('/logar', Adm.getLogar);
router.post('/logar', Adm.postLogar);


router.get('/painel', auth.autorizar, Adm.getPainel);
router.post('/painel', Adm.postPainel);

router.get('/criar',auth.autorizar, Morador.getCriar); //auth.autorizar
router.post('/criar', Morador.postCriar);




module.exports = router;