
const Usuario = require('../../modelos/Usuario')

const ControladorUsuario = {
    //Assincrono pq vamos lidar com dados
    async criarUsuario(req, res) {

        //Pegando o body da requisao as infos
        const bodyData = req.body

        try { 
            const novoUsuario = await Usuario.create(bodyData)
            return res.status(200).json(novoUsuario)
        } catch(err) {
            return res.status(400).json(err)
        }
    },

    async listarUsuarios(req, res) {
        const paramsData = req.params

        try { 
            const usuarios = await Usuario.find()
            return res.status(200).json(usuarios)
        } catch (err){
            return res.status(400).json(error)
        }
    },

    async selecionarUsuarioPeloId(req, res) {
        const { usuario_id } = req.params

        try {
            const usuario = await Usuario.findById(usuario_id)
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = ControladorUsuario