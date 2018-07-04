var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var convenioEmpresa = require('../../models/convenios/convenioEmpresa');


//CONSULTAR CONVENIO_EMPRESA POR ID
exports.callProcedureConvenioEmpresaPorId = function(code,callback){

    callback = callback || function(){};
    
    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);

        request.input('CODE', code);
        request.execute('pr_CA_CONV_s_ConvenioEmpresaById')
        .then(function (recordset) {    

            convenioEmpresa = {};

            if(recordset.recordset[0]){

                convenioEmpresa = recordset.recordset[0];

                if(convenioEmpresa.ativo === null){
                    convenioEmpresa.ativo = true;
                }else{
                    convenioEmpresa.ativo = false;
                }

                if(convenioEmpresa.internet === 'S'){
                    convenioEmpresa.internet = true;
                }else{
                    convenioEmpresa.internet = false;
                }


            }else{
                convenioEmpresa = {};
            }

            callback(convenioEmpresa);                 
        })
        .catch(function (err) {
            //CONVENIO_EMPRESA NÃO LOCALIZADA
            console.log('');
            console.log('convenioEmpresaDAO - Não foi possível localizar convenioEmpresa.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('convenioEmpresaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};