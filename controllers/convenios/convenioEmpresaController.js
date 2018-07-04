var dao = require('../../daos/convenios/convenioEmpresaDAO');
var util = require('util');
var convenioEmpresa = require('../../models/convenios/convenioEmpresa');




// PROCEDURES

exports.convenioEmpresaPorId = function(code,callback){

    dao.callProcedureConvenioEmpresaPorId(code,function (convenioEmpresa, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('convenioEmpresaController - Error: '+err.code);
        }else{
            callback(convenioEmpresa);  
            console.log('');
            console.log('convenioEmpresaController - convenioEmpresaPorId : '+JSON.stringify(convenioEmpresa));
        }

    });
};

