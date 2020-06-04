# condsystem


# CondSystem o sistema de segurança de portaria 


| 
[Wiki](https://gitlab.com/BDAg/condsystem/-/wikis/home) | 
[Equipe](https://gitlab.com/BDAg/condsystem/-/wikis/Equipe) | 
[Todos os Projetos](https://gitlab.com/BDAg) |
[MVP](https://gitlab.com/BDAg/condsystem/-/wikis/MVP) |
[Mapa de Conhecimento](https://gitlab.com/BDAg/condsystem/-/wikis/Mapa-de-conhecimento) |
[Matriz de Habilidade](https://gitlab.com/BDAg/condsystem/-/wikis/Matriz-de-Habilidade) |
[Conograma](https://gitlab.com/BDAg/condsystem/-/wikis/Conograma) |
[Setup](https://gitlab.com/BDAg/condsystem/-/wikis/Setup) |


![Build Status](https://travis-ci.org/condessalovelace/mavenquickstart.svg?branch=master) 
![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=br.com%3Amavenquickstart&metric=alert_status)

![top](https://media.giphy.com/media/PmEvQTKerJEu9RDert/giphy.gif)

## **Etapas**

**Definições do Projeto** (13/05/2020)
* [x] Equipe e tema - (05/03/2020)
* [x] MVP - (12/03/2020)
* [x] Matriz de habilidade - (12/03/2020)
* [x] Mapa de conhecimento - (12/03/2020)
* [x] Cronograma - (03/05/2020)

**Sprint 1** (24/05/2020)
* [x] Modelagem do banco de dados (12/05/2020)
* [x] API morador - (09/05/2020)
* [x] API Administração - (20/05/2020)
* [x] Tela da portaria - (18/05/2020)
* [x] Tela da admistração - (12/05/2020)

**Sprint 2** (31/05/2020) e (14/06/2020)
* [ ] integração Apis
* [ ] integração da Aplicação

**Sprint 3** (21/06/2020)
* [ ] ajuste fino da aplição
* [ ] Deploy da Aplicação
* [ ] Documentação do projeto
* [ ] matriz de habilidade (Lições aprendidas)


fluxograma do schema:

```mermaid
graph LR


Adm[Administrador]
Adm --> A((nome))
Adm --> B((email))
Adm --> C((senha))
Adm --> D((log)) 



Mora[Morador]
Mora --> A
Mora --> E((nickname))
Mora --> F((senha1))
Mora --> G((senha2))
Mora --> D((log))

Mora[Morador] --> Ca[Casa]

Ca[Casa]
Ca --> H((bloco))
Ca --> I((numero))

```

## **API**

### Available Scripts

No diretório do projeto, você pode executar:

* `yarn roda` ou `npm run roda`

Executa o aplicativo no modo de desenvolvimento.<br />
Abrir [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições. <br />
Você também verá quaisquer erros no console.

### As rotas que estão funcionando com o Front-End são: <br />

* logar morador(portaria) [http://localhost:3000/](http://localhost:3000/)
* logar adminstrador [http://localhost:3000/adm/logar](http://localhost:3000/funcionario/logar)
* criar morador (rota protegida) [http://localhost:3000/adm/criar](http://localhost:3000/funcionario/criar)

### As rota que estão sem Front-End  são: <br />

* criar adminstrador [http://localhost3000/adm/criar](http://localhost:3000/adm/)
* lista todos moradores //sem rota 

- [x] controller do ADM.
- [x] tela de login do Adm.
- [x] tela de registrar moradores.
- [x] tela de autenticação do morador.
- [x] criptografia das senhas.
- [x] controlle do Morador.
- [x] autenticação senha 2.
- [x] bloquear a rota [http://localhost:3000/funcionario/criar](http://localhost:3000/funcionario/criar) de usuarios que não é adm.
- [x] retornar a mensagem (assalto) ao adm.
- [ ] retornar a mensagem nas requisiçoes (ex: conta criada com sucesso, conta ja existe, senha ou email incorretos).
- [x] conserta a rota do do login do usuario, está redirecionado para a tela de criar usuarios.
- [x] conserta controllers retornano uma tela não programada e apresentado menssage não interessante ao usuario.
- [x] responsividade na tela de login(adm).
- [x] responsividade na tela de login(moradores).
- [x] responsividade na tela de criar(moradores).

### Dados para uso teste: <br />

#### morador:

* nome: Leonardo Bezerra Bussi
* nickname: leonardo_bussi
* senha1: 123456
* senha2: 123455
* numero: 12  //numero da casa
* bloco: 33b //bloco da casa

#### administrador:

* nome: leonardo 
* email: leonardo@teste.com
* senha: 123456789
