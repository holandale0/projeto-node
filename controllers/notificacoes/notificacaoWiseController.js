var dao = require('../../daos/notificacoes/notificacaoWiseDAO');
var util = require('util');
var notificacao = require('../../models/notificacoes/notificacaoWise');



exports.notificacoesWise = function(tipo,inicio,callback){

    dao.callProcedureNotificacaoWise(tipo,inicio,function (notificacao, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('notificacaoWiseController - Error: '+err.code);
        }else{
            callback(notificacao);  
            console.log('');
            console.log('notificacaoWiseController - notificacoes : '+JSON.stringify(notificacao));
        }

    });
};