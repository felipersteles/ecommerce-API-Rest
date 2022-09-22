
const middlewares = {

    authenticate(req, res, next) {
        
        const { authentication } = req.headers
        const { usuario_id } = req.params

        if (!authentication) return res.status(400).json({ mensagem: 'Sem chave' })
        if (authentication !== usuario_id) return res.status(400).json({ mensagem: 'Sem autorização' })
        
        next()
    }

}

module.exports = middlewares