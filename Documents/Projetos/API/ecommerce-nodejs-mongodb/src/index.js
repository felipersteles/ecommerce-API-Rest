
const express = require('express') //Biblioteca para realizar a transmissao do server
const mongoose = require('mongoose') //Acesso ao mongoDB

 //Middleware: Software para comunicação entre aplicações
const cors = require('cors') //Facilitar conexão

require('dotenv').config()

const rotas = require('./rotas')

const app = express()

//Conectando com o banco de dados
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));

app.use(cors()) 
app.use(express.json()) //analisa requests
app.use(rotas)

app.listen(3333, () => console.log('Server running'))