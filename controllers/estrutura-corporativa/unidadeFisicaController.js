var dao = require('../../daos/estrutura-corporativa/unidadeFisicaDAO');
var util = require('util');
var unidadeFisica = require('../../models/estrutura-corporativa/unidadeFisica');



// PROCEDURES

exports.unidadeFisicaPorId = function(idUnidade,callback){

    dao.callProcedureUnidadeFisicaPorId(idUnidade,function (unidadeFisica, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('unidadeFisicaController - Error: '+err.code);
        }else{
            callback(unidadeFisica);  
            console.log('');
            console.log('unidadeFisicaController - unidadeFisicaPorId : '+JSON.stringify(unidadeFisica));
        }

    });
};