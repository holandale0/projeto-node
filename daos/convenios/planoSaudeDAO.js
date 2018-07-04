var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var plano = require('../../models/convenios/planoSaude');



//CONSULTAR PLANO DE SAÚDE POR ID
exports.callProcedurePlanoSaudePorId = function(idPlano ,callback){

    callback = callback || function(){};


    let conn = new mssql.ConnectionPool(config);

    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);

        request.input('ID_PLSA_CD_PLANOSAUDE', idPlano);
        request.execute('pr_CA_CONV_s_PlanoSaudeByID')

        .then(function (recordset) {    

            plano = {};

            if(recordset.recordset[0]){

                plano = recordset.recordset[0];

                if(plano.ativo === null){
                    plano.ativo = true;
                }else{
                    plano.ativo = false;
                }

                if(plano.internet === 'S'){
                    plano.internet = true;
                }else{
                    plano.internet = false;
                }


                if(plano.exigeCrm === 'S'){
                    plano.exigeCrm = true;
                }else{
                    plano.exigeCrm = false;
                }
            }  
            
            callback(plano);
            console.log('');
            console.log('planoSaudeDAO - callProcedurePlanoSaudePorId : '+JSON.stringify(plano));
            
        })
        .catch(function (err) {
            // PLANO NÃO ENCONTRADO
            console.log('');
            console.log('planoSaudeDAO - Não foi possível localizar o plano de saúde.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        // ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('planoSaudeDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};

