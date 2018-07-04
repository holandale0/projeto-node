var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var convenio = require('../../models/convenios/convenio');



//CONSULTAR CONVÊNIO POR ID
exports.callProcedureConvenioPorId = function(idConvenio ,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);

    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);

        request.input('ID_CONV_CD_CONVENIO', idConvenio);
        request.execute('pr_CA_CONV_s_ConvenioByID')    
        .then(function (recordset) {    

            convenio = {};

            if(recordset.recordset[0]){

                convenio = recordset.recordset[0];
                
                if(convenio.ativo === null){
                    convenio.ativo = true;
                }else{
                    convenio.ativo = false;
                }


                if(convenio.internet === 'S'){
                    convenio.internet = true;
                }else{
                    convenio.internet = false;
                }

            }  
            
            callback(convenio);
            console.log('');
            console.log('convenioDAO - callProcedureConvenioPorId : '+JSON.stringify(convenio));
            
        })
        .catch(function (err) {
            // CONVÊNIO NÃO ENCONTRADO
            console.log('');
            console.log('convenioDAO - Não foi possível localizar o convênio.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        // ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('convenioDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};



