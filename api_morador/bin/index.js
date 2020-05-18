const express = require('express');
//const expressLayouts = require('express-ejs-layouts');
const bp = require('body-parser');
const app = express();

app.use(bp.json({limit: '10mb'}));
app.use(bp.urlencoded({extended: false}));

app.set('view engine', 'ejs');
//app.use(expressLayouts);
app.set('views', 'views');

app.use(express.static('public'));

const morador_route = require('../src/routes/morador');

app.use('/', morador_route);

app.use('/', (req, res) => {
   return  res.redirect('/logar'); 
});


module.exports = app;