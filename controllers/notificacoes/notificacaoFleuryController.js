var dao = require('../../daos/notificacoes/notificacaoFleuryDAO');
var util = require('util');
var notificacao = require('../../models/notificacoes/notificacaoFleury');



exports.notificacoesFleury = function(tipo,inicio,callback){

    dao.callProcedureNotificacaoFleury(tipo,inicio,function (notificacao, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('notificacaoFleuryController - Error: '+err.code);
        }else{
            callback(notificacao);  
            console.log('');
            console.log('notificacaoFleuryController - notificacoes : '+JSON.stringify(notificacao));
        }

    });
};