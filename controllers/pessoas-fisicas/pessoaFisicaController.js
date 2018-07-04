var dao = require('../../daos/pessoas-fisicas/pessoaFisicaDAO');
var util = require('util');
var pessoaFisica = require('../../models/pessoas-fisicas/pessoaFisica');



// PROCEDURES

exports.pessoaFisicaPorId = function(idPessoa,callback){

    dao.callProcedurePessoaFisicaPorId(idPessoa,function (pessoaFisica, err) {

        if(err){   
            callback(err); 
            console.log('');
            console.log('pessoaFisicaController - Error: '+err.code);
        }else{
            callback(pessoaFisica);  
            console.log('');
            console.log('pessoaFisicaController - pessoaFisicaPorId : '+JSON.stringify(pessoaFisica));
        }

    });
};