var dao = require('../../daos/convenios/empresaDAO');
var util = require('util');
var empresa = require('../../models/convenios/empresa');



exports.empresaPorId = function(idEmpresa,callback){

    dao.callProcedureEmpresaPorId(idEmpresa,function (empresa, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('empresaController - Error: '+err.code);
        }else{
            callback(empresa);  
            console.log('');
            console.log('empresaController - empresaPorId : '+JSON.stringify(empresa));
        }

    });
};