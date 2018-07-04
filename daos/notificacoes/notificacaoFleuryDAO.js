var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
//var tipoNotificacaoEnum = require('../../models/commons/tipoNotificacaoEnum');
var notificacaoFleury = require('../../models/notificacoes/notificacaoFleury');



//CONSULTAR EMPRESA POR ID
exports.callProcedureNotificacaoFleury = function(tipo,inicio,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);

        request.input('TIPO', tipo);
        request.input('INICIO', inicio); // FORMATO "2018-01-01T00:00:00Z"
        request.execute('pr_CA_NOTIF_s_NotificacaoFleury')
        .then(function (recordset) {    

            notificacao = {};

            if(recordset.recordset[0]){
                notificacao = recordset.recordset;
            }

            callback(notificacao);  
            console.log('');
            console.log('notificacaoFleuryDAO - callProcedureNotificacaoFleury : '+JSON.stringify(notificacao));                           
        })
        .catch(function (err) {
            //NOTIFICAÇÃO NÃO LOCALIZADA
            console.log('');
            console.log('notificacaoFleuryDAO - Não foram encontradas notificações.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('notificacaoFleuryDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};