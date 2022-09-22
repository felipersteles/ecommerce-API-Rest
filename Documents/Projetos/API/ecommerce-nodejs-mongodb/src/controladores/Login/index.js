const Usuario = require("../../modelos/Usuario")

const ControladorLogin = {
    
    async criarSessao(req, res) {
        
        const { nome_usuario } = req.body

        try { 
            const usuario = await Usuario.findOne({ nome_usuario })
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = ControladorLogin