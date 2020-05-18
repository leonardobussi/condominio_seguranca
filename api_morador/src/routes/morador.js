const Morador = require('../controller/morador');
const express = require('express');
const router = express.Router();

router.get('/logar', Morador.getLogar);
router.post('/logar', Morador.postLogar);



module.exports = router;