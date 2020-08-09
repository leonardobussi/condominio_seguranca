const express = require('express');
const bp = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

const morador_route = require('../src/routes/morador');
const adm_route = require('../src/routes/adm');

app.use('/', morador_route);
app.use('/adm', adm_route);


module.exports = app;