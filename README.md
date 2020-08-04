# Sistema de segurança de portaria 

![Build Status](https://travis-ci.org/condessalovelace/mavenquickstart.svg?branch=master) ![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=br.com%3Amavenquickstart&metric=alert_status)

------------------------------------------------------------
## Contribuidores:
![eu1](https://user-images.githubusercontent.com/54999837/89251035-74fda700-d5ec-11ea-9ef1-b642560980f7.jpeg)
![rais1](https://user-images.githubusercontent.com/54999837/89251037-75963d80-d5ec-11ea-9df9-628d405cc0ed.jpeg)
![wil1](https://user-images.githubusercontent.com/54999837/89251038-762ed400-d5ec-11ea-89f5-ecca4759b938.jpeg)

[@leonardobussi](https://github.com/leonardobussi/) | [@Raisler](https://github.com/Raisler) | [@Wiliansantana](https://github.com/Wiliansantana)

## Como utilizar? [ver documentação](##como-utilizar)

![condsystem2](https://user-images.githubusercontent.com/54999837/89251865-8b0c6700-d5ee-11ea-8689-ef42efacdd0d.png)


## **Etapas**

**Sprint 1** (24/05/2020)
* [x] Modelagem do banco de dados (12/05/2020)
* [x] API morador - (09/05/2020)
* [x] API Administração - (20/05/2020)
* [x] Tela da portaria - (18/05/2020)
* [x] Tela da admistração - (12/05/2020)

**Sprint 2** (14/06/2020)
* [x] integração Apis (8/06/2020)
* [x] integração da Aplicação (8/06/2020)

**Sprint 3** (21/06/2020)
* [x] implementação (notify messenger adm), painel do administrador, bloquear rotas e concerta o os front-end (12/06/2020);
* [x] Deploy da Aplicação (12/06/2020);
* [x] ordernar as mesagem de assalto ao adm no front end (12/06/2020);
* [ ] colocar mensagem em tempo real(websockt.io).



## **API**

### Available Scripts

No diretório do projeto, você pode executar:

* `yarn roda` ou `npm run roda`

Executa o aplicativo no modo de desenvolvimento.<br />
Abrir para visualizá-lo no navegador.

A página será recarregada se você fizer edições. <br />
Você também verá quaisquer erros no console.

* logar morador(portaria) [http://localhost:3000/](http://localhost:3000/)
* logar adminstrador [http://localhost:3000/adm/logar/](http://localhost:3000/funcionario/logar)
* criar morador (rota protegida) [http://localhost:3000/adm/criar/](http://localhost:3000/funcionario/criar)
* load do portao (rota protegida) [http://localhost:3000/up/](http://localhost:3000/up/)
* painel do adminstrador (rota protegida) [http://localhost:3000/adm/painel/](http://localhost:3000/adm/panel/)
* criar adminstrador (rota protegida) [http://localhost3000/adm/](http://localhost:3000/adm/)


#### features

- [x] controller do ADM.
- [x] tela de login do Adm.
- [x] tela de registrar moradores.
- [x] tela de autenticação do morador.
- [x] tela de load(portao).
- [x] painel da adminstração.
- [x] criptografia das senhas.
- [x] controlle do Morador.
- [x] autenticação senha 2.
- [x] bloquear a rota [http://localhost:3000/adm/criar/](http://localhost:3000//adm/criar/) de usuarios que não é adm;
- [x] bloquear a rota [http://localhost:3000/adm/painel/](http://localhost:3000/adm/painel/) de usuarios que não é adm;
- [x] bloquear a rota [http://localhost:3000/up/](http://localhost:3000/up/) simulador do portao abrindo;
- [x] retornar a mensagem nas requisiçoes (ex: conta criada com sucesso, conta ja existe, senha ou email incorretos);
- [x] conserta a rota do do login do usuario, está redirecionado para a tela de criar usuarios;
- [x] conserta controllers retornano uma tela não programada e apresentado menssage não interessante ao usuario;
- [x] responsividade na tela de login(adm);
- [x] responsividade na tela de login(moradores);
- [x] responsividade na tela de criar(moradores);
- [x] responsividade na tela de load(moradores);
- [x] responsividade no painel (adm);
- [x] criar um schema de log de entrada ao condominio (somente para quando usa a senha dois);
- [x] registrar a entrada do morador no schema;
- [x] retornar a mensagem de assalto ao painel do adminstrador pelo schema de logs de entrada;
- [x] ordernar as mesagem de assalto ao adm no front end (extra);
- [x] criar a tela de registrar adminstradores;
- [ ] colocar mensagem em tempo real(websockt.io)


## Como utilizar

1. Navegue até o arquivo **keys.js** na pasta **bin** que está localizada na raiz do projeto.
	> Nesse arquivo vai ter um objeto database e na string conection adicione a string de conexão com o mongpdb.

2. Navegue até **adm.js** na pasta  **src/routes/adm.js**.
	> nesse arquivo vai ter uma rota bloqueada, e essa rota é usada para criar o administrador, mas para criar o administrador você devera remover o middleware de autenticação da forma que está descrito a baixo.
		
	- Remova o **auth.autorizar** 
	`router.get('/', auth.autorizar, Adm.getCriar);`
	- Essa linha tem que ficar assim.
	`router.get('/', Adm.getCriar);`

3. Inicie o projeto rodando o comando `npm run roda` ou `yarn roda` e acesse a rota [http://localhost3000/adm/](http://localhost3000/adm/)
	> Registre um adminstrador, após registrar adicione novamente **auth.autorizar**.
	- Para ficar desse jeito.
	`router.get('/', auth.autorizar, Adm.getCriar);`

4. para acessar o painel de controle que esta na rota [http://localhost:3000/adm/painel/](http://localhost:3000/adm/painel/) basta logar usando as credenciais que foi criado. 

# Documentação da API

lorem  kdnknknknksnd sm dskdnks
sdlsdls 


------------------------------------------------------------------------------
###### Leonardo B. Bussi © - 2020 [licença MIT](https://raw.githubusercontent.com/leonardobussi/condsystem/master/LICENSE)
