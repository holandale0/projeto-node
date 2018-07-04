
var emails = require('../../models/pessoas-fisicas/emails');
var telefones = require('../../models/pessoas-fisicas/telefones');
var endereco = require('../../models/pessoas-fisicas/enderecos');
var documentoProfissional = require('../../models/pessoas-fisicas/documentoProfissional');

exports.pessoaFisica = {
    id : Number,
    nome : String,
    titulo : String,
    sexo : String,
    dataNascimento : Date,
    dataNascimentoFicticia : Boolean,
    emails,
    telefones,
    endereco,
    documentoProfissional
}