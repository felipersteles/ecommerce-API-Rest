
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    produtos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    }],
    nome_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    endereco: {
        logradouro: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        }
    },
    pagamento: {
        cartao: {
            numero: {
                type: String
            },
            cvc: {
                type: String
            }
        }
    }
})

module.exports = mongoose.model('Carrinho', Schema)
