var dao = require('../../daos/convenios/planoSaudeDAO');
var util = require('util');
var planoSaude = require('../../models/convenios/planoSaude');




exports.planoSaudePorId = function(idPlano,callback){

    dao.callProcedurePlanoSaudePorId(idPlano,function (planoSaude, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('planoSaudeController - Error: '+err.code);
        }else{
            callback(planoSaude);  
            console.log('');
            console.log('planoSaudeController - planoSaudePorId : '+JSON.stringify(planoSaude));
        }

    });
};