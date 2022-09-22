
const { Router } = require('express')

const ControladorUsuario = require('../controladores/ControladorUsuario')
const ControladorLogin = require('../controladores/Login')
const ControladorProduto = require('../controladores/ControladorProduto')
const ControladorCarrinho = require('../controladores/ControladorCarrinho')

const { authenticate } = require('../middlewares')

const rotas = Router()

//get executando uma função passando requisicao e resposta
rotas.get('/', (req, res) => {
    res.send('Olá mundo') //funcao retornando uma resposta 'hello world'
})

//Rotas utilizadas na aplicação

rotas.post('/usuarios', ControladorUsuario.criarUsuario) //rota para criar o usuario
rotas.get('/usuarios', ControladorUsuario.listarUsuarios) //listar usuarios

rotas.get('/usuarios/:usuario_id', ControladorUsuario.selecionarUsuarioPeloId) //recuperar usuario especifico

rotas.post('/login', ControladorLogin.criarSessao) //fazer o login

rotas.post('/produtos/:usuario_id', authenticate, ControladorProduto.criarProduto) //criar produtos
rotas.get('/:usuario_id/produtos', ControladorProduto.listarProdutosDoUsuario) //listar os produtos de um usuario
rotas.patch('/produtos/:usuario_id/:produto_id', authenticate, ControladorProduto.atualizarProduto) //atualizar produto
rotas.delete('/produtos/:usuario_id/:produto_id', authenticate, ControladorProduto.deletarProduto) //deletar produto de usuarioo

rotas.get('/produtos', ControladorProduto.listarProdutos) //lista todos produtos
rotas.get('/produtos/:produto_id', ControladorProduto.listarProdutoPeloID) //produto especifico

rotas.post('/carrinho/:usuario_id', authenticate, ControladorCarrinho.criarCarrinho) //postar carrinho do usuario
rotas.get('/carrinho/:usuario_id', authenticate, ControladorCarrinho.listarCarrinhoDoUsuario) //recuperar carrinho do usuario

rotas.get('/carrinho/:usuario_id/:carrinho_id', authenticate, ControladorCarrinho.listarCarrinhos) //recuperar carrinho especifico
//passando o id do usuario pois carrinhos devem ser coisas mais particulares



module.exports = rotas