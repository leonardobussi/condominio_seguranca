# Projeto de autenticação de moradores de condominio contra assalto 

## Available Scripts

No diretório do projeto, você pode executar:

### `yarn roda`

Executa o aplicativo no modo de desenvolvimento.<br />
Abrir [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições. <br />
Você também verá quaisquer erros no console.

### As rotas que estão funcionando com o Front-End são: <br />

* logar morador(portaria) [http://localhost:3000/](http://localhost:3000/)
* logar adminstrador [http://localhost:3000/adm/logar](http://localhost:3000/funcionario/logar)
* criar morador (rota protegida) [http://localhost:3000/adm/criar](http://localhost:3000/funcionario/criar)

## As rota que estão sem Front-End  são: <br />

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
- [ ] retornar a mensagem (assalto) ao adm.
- [ ] retornar a mensagem nas requisiçoes (ex: conta criada com sucesso, conta ja existe, senha ou email incorretos).
- [x] conserta a rota do do login do usuario, está redirecionado para a tela de criar usuarios.
- [x] conserta controllers retornano uma tela não programada e apresentado menssage não interessante ao usuario.
- [x] responsividade na tela de login(adm).
- [x] responsividade na tela de login(moradores).
- [x] responsividade na tela de criar(moradores).

### Dados para uso: <br />

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