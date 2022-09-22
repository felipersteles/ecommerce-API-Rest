
const Produto = require('../../modelos/Produto')

const ControladorProduto = {
    async criarProduto(req, res) {
        const bodyData = req.body
        const { usuario_id } = req.params

        try {
            const aux = { nome_usuario: usuario_id, ...bodyData }
            //console.log(aux)
            //return

            const novoProduto = await Produto.create(aux);
            await novoProduto.populate('nome_usuario')
            
            
            //console.log(novoProduto)
            return res.status(200).json(novoProduto)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async listarProdutosDoUsuario(req, res) {
        const { usuario_id } = req.params

        try {
            const produtosDoUsuario = await Produto.find({ nome_usuario: usuario_id })
            return res.status(200).json(produtosDoUsuario)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async atualizarProduto(req, res) {
        const bodyData = req.body
        const { produto_id, usuario_id } = req.params //nao é necessario user_id

        try {
            const atualizacaoProduto = await Produto.findByIdAndUpdate(produto_id, bodyData, { new: true })
            return res.status(200).json(atualizacaoProduto)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async deletarProduto(req, res) {
        const { produto_id, user_id } = req.params

        try {
            const deletaProduto = await Produto.findByIdAndDelete(produto_id)
            return res.status(200).json(deletaProduto)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async listarProdutoPeloID(req, res) {
        const { produto_id} = req.params

        try {
            const produto = await Produto.findById(produto_id)
            return res.status(200).json(produto)
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    async listarProdutos(req, res){
        try {
            const produtos = await Produto.find()
            return res.status(200).json(produtos)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = ControladorProduto