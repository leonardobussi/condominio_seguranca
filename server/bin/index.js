const express = require('express');
const bp = require('body-parser');
const app = express();


app.use(bp.json());
app.use(bp.urlencoded({extended: false}));


app.set('view engine', 'ejs');
//app.use(expressLayouts);
app.set('views', 'views');

app.use(express.static('public'));

const morador_route = require('../src/routes/morador');
const adm_route = require('../src/routes/adm');

app.use('/', morador_route);
app.use('/adm', adm_route);

/*app.use('/painel', function(req, res){
  return res.render('painel/_index');
});*/

/*app.get('/up', function(req, res){
  return res.render('sucess/_index');
});*/





module.exports = app;