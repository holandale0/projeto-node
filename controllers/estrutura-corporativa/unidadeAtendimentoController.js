var dao = require('../../daos/estrutura-corporativa/unidadeAtendimentoDAO');
var util = require('util');
var unidadeAtendimento = require('../../models/estrutura-corporativa/unidadeAtendimento');



// PROCEDURES

exports.unidadeAtendimentoPorId = function(idUnidade,callback){

    dao.callProcedureUnidadeAtendimentoPorId(idUnidade,function (unidadeAtendimento, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('unidadeAtendimentoController - Error: '+err.code);
        }else{
            callback(unidadeAtendimento);  
            console.log('');
            console.log('unidadeAtendimentoController - unidadeAtendimentoPorId : '+JSON.stringify(unidadeAtendimento));
        }

    });
};