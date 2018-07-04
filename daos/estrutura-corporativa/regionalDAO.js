var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var regional = require('../../models/estrutura-corporativa/regional');



//CONSULTAR REGIONAL POR ID
exports.callProcedureRegionalPorId = function(idRegional,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);
        
        request.input('ID_ESVE_SL_ESCRITORIO', idRegional);

        request.execute('pr_CA_EST_CORP_s_RegionalById')

        .then(function (recordset) {    

            regional = {};

            if(recordset.recordset[0]) {              

                regional = recordset.recordset[0];

            if(regional.ativo === 'S'){
                regional.ativo = true;
            }else{
                regional.ativo = false;
            }

            }
        

            callback(regional);
            console.log('');
            console.log('regionalDAO - callProcedureRegionalPorId : '+JSON.stringify(regional));

            
        })
        .catch(function (err) {
            //REGIONAL NÃO LOCALIZADA
            console.log('');
            console.log('regionalDAO - Não foi possível localizar o regional.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('regionalDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};