
const mongoose = require('mongoose')

// Schema mongoose: 
const Schema = new mongoose.Schema({
    nome_produto: {
        type: String,
        required: true
    },
    descricao_produto: {
        type: String
    },
    preco_produto: {
        type: Number,
        required: true
    },
    quantidade_produto: {
        type: Number,
        required: true
    },
    img_produto: {
        type: String,
        required: true
    },
    nome_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
})

module.exports = mongoose.model('Produto', Schema)
