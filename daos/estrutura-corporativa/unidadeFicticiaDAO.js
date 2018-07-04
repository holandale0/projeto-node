var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var unidadeFicticia = require('../../models/estrutura-corporativa/unidadeFicticia');




//CONSULTAR UNIDADE FICTICIA POR ID
exports.callProcedureUnidadeFicticiaPorId = function(idUnidade,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);
        
        request.input('ID_UNFI_CD_UNIDFICTICIA', idUnidade);

        request.execute('pr_CA_EST_CORP_s_UnidadeFicticiaById')

        .then(function (recordset) {    

            unidadeFicticia = {};


            if(recordset.recordset[0]) {   
                
                unidadeFicticia = recordset.recordset[0];

            if(unidadeFicticia.ativo === null){
                unidadeFicticia.ativo = true;
            }else{
                unidadeFicticia.ativo = false;
            }

            }
        

            callback(unidadeFicticia);
            console.log('');
            console.log('unidadeFicticiaDAO - callProcedureUnidadeFicticiaPorId : '+JSON.stringify(unidadeFicticia));

            
        })
        .catch(function (err) {
            //UNIDADE FICTICIA NÃO LOCALIZADA
            console.log('');
            console.log('unidadeFicticiaDAO - Não foi possível localizar a unidade ficticia.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('unidadeFicticiaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};