
//var regional = require('../../models/estrutura-corporativa/regional');
var endereco = require('../../models/estrutura-corporativa/endereco');

exports.unidadeFisica = {
    id : Number,
    ativo : Boolean,
    nome : String,
    regional : String, // JOIN
    endereco
};