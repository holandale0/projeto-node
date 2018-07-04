var dao = require('../../daos/estrutura-corporativa/marcaDAO');
var util = require('util');
var marca = require('../../models/estrutura-corporativa/marca');



// PROCEDURES

exports.marcaPorId = function(idMarca,callback){

    dao.callProcedureMarcaPorId(idMarca,function (marca, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('marcaController - Error: '+err.code);
        }else{
            callback(marca);  
            console.log('');
            console.log('marcaController - marcaPorId : '+JSON.stringify(marca));
        }

    });
};