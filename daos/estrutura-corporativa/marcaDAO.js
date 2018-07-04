var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var marca = require('../../models/estrutura-corporativa/marca');



//CONSULTAR MARCA POR ID
exports.callProcedureMarcaPorId = function(idMarca,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);
        
        request.input('ID_MCOR_SL_MARCA', idMarca);

        request.execute('pr_CA_EST_CORP_s_MarcaById')

        .then(function (recordset) {    

            marca = {};

            if(recordset.recordset[0]) {              

            marca = recordset.recordset[0];

            if(marca.ativo === null){
                marca.ativo = true;
            }else{
                marca.ativo = false;
            }

            }
        

            callback(marca);
            console.log('');
            console.log('marcaDAO - callProcedureMarcaPorId : '+JSON.stringify(marca));

            
        })
        .catch(function (err) {
            //MARCA NÃO LOCALIZADA
            console.log('');
            console.log('marcaDAO - Não foi possível localizar a marca.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('marcaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};