var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var empresa = require('../../models/convenios/empresa');


//CONSULTAR EMPRESA POR ID
exports.callProcedureEmpresaPorId = function(idEmpresa,callback){

    callback = callback || function(){};
    
    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);

        request.input('ID_EMCV_CD_EMPRCONVENIO', idEmpresa);
        request.execute('pr_CA_CONV_s_EmpresaByID')
        .then(function (recordset) {    

            empresa = {};

            if(recordset.recordset[0]){

                empresa = recordset.recordset[0];

                if(empresa.ativo === null){
                    empresa.ativo = true;
                }else{
                    empresa.ativo = false;
                }
            }else{
                empresa = {};
            }

            callback(empresa);                 
        })
        .catch(function (err) {
            //EMPRESA NÃO LOCALIZADA
            console.log('');
            console.log('empresaDAO - Não foi possível localizar a empresa.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('empresaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};