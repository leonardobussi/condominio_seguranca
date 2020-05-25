const Morador = require('../controller/morador');
const express = require('express');
const router = express.Router();

//router.get('/', Cliente.getCriar);
//router.post('/', Cliente.postCriar);

router.get('/todos', Morador.buscarTodos);
router.get('/deslogar', Morador.getDeslogar);


router.get('/', Morador.getLogar);
router.post('/', Morador.postLogar);



module.exports = router;