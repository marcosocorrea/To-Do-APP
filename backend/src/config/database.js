const mongoose = require('mongoose')
mongoose.Promise = global.Promise // a API de promise do mongoose vai usar a propria API de promisedo Node.
module.exports = mongoose.connect('mongodb://localhost/todo')

