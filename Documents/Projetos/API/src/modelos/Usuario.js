const mongoose = require('mongoose')

// Schema mongoose: 
const Schema = new mongoose.Schema({
    nome_usuario: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Usuario', Schema)