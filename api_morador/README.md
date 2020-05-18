# API do Morador

## Na pasta **bin** está os arquivos index.js e keys.js:
   
### index.js

seta ejs como engine front-end 

`app.set('view engine', 'ejs');`

`app.set('views', 'views');`

seta a pasta public como pasta de arquivos estaticos (css e imagens)

`app.use(express.static('public'));`

seta a rota **/logar** como padrao do morador e se caso o morador colocar a rota
**/** (barra) irá ser redirecionado a rota **/logar**

`const morador_route = require('../src/routes/morador');`

`app.use('/', morador_route);`

`app.use('/', (req, res) => {
   return  res.redirect('/logar'); 
});`

### keys.js

seta a porta 

`server: {
        port: process.env.port || 3000,
    }`

seta o database

`database: {
        connection: 'mongodb'
    }`

seta a criptografia

`auth: {
        secret: '123'
    }`
    
## Na pasta **src/controller** está os arquivos morador.js:

instrução de logar

`exports.getLogar =  async (req, res, next) => {}`

`exports.postLogar =  async (req, res, next) => {}`





