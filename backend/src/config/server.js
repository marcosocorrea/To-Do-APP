const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true })) // sempre que chegar uma requisição que usa este padrão 'urlencoded' que é o padrao usado para submissão de formularios, quem vai fazer o parser é o bodyparser.
server.use(bodyParser.json()) //faz o parser dos json que chegarem por requisição
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`) //ao startar o servidor com o comando 'npm run dev' , se tudo ocorrer bem, a frase 'BACKEND is running on port 3003' aparecerá.
})

module.exports = server