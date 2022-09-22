
const Carrinho = require('../../modelos/Carrinho')

const ControladorCarrinho = {

    async criarCarrinho(req, res) {

        const bodyData = req.body
        const { usuario_id } = req.params

        try {
            //Sabe o pqrquê desses tres pontinhos no começo?
            //O nome desse operador é _SPREAD_ e ele transforma um objeto em uma lista de dados
            const CarrinhoCriado = await Carrinho.create({ ...bodyData, nome_usuario: usuario_id })
            await CarrinhoCriado.populate('produtos')

            return res.status(200).json(CarrinhoCriado) //lembrando que tem que prencher o corpo da requisicao
        } catch (error) {
            return res.status(400).json(error)
        }

    },

    async listarCarrinhoDoUsuario(req, res) {

        const { usuario_id } = req.params

        try {
            const CarrinhosDoUsuario = await Carrinho.find({ nome_usuario: usuario_id })
                .populate('produtos')
                .populate('nome_usuario')
            
            return res.status(200).json(CarrinhosDoUsuario)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
        
    async listarCarrinhos(req, res) {
        
        const { usuario_id, carrinho_id } = req.params

        try {
            const carinho = await Carrinho.findById(carrinho_id)
                .populate('produtos')
                .populate('nome_usuario')

            return res.status(200).json(carinho)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = ControladorCarrinho