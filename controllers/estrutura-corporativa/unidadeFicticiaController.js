var dao = require('../../daos/estrutura-corporativa/unidadeFicticiaDAO');
var util = require('util');
var unidadeFicticia = require('../../models/estrutura-corporativa/unidadeFicticia');



// PROCEDURES

exports.unidadeFicticiaPorId = function(idUnidade,callback){

    dao.callProcedureUnidadeFicticiaPorId(idUnidade,function (unidadeFicticia, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('unidadeFicticiaController - Error: '+err.code);
        }else{
            callback(unidadeFicticia);  
            console.log('');
            console.log('unidadeFicticiaController - unidadeFicticiaPorId : '+JSON.stringify(unidadeFicticia));
        }

    });
};