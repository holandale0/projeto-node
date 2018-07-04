var dao = require('../../daos/convenios/convenioDAO');
var util = require('util');
var convenio = require('../../models/convenios/convenio');




// PROCEDURES

exports.convenioPorId = function(idConvenio,callback){

    dao.callProcedureConvenioPorId(idConvenio,function (convenio, err) {

        if(err){    
            callback(err); 
            console.log('');
            console.log('convenioController - Error: '+err.code);
        }else{
            callback(convenio);  
            console.log('');
            console.log('convenioController - convenioPorId : '+JSON.stringify(convenio));
        }

    });
};

