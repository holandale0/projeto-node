var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var unidadeAtendimento = require('../../models/estrutura-corporativa/unidadeAtendimento');



//CONSULTAR UNIDADE ATENDIMENTO POR ID
exports.callProcedureUnidadeAtendimentoPorId = function(idUnidade,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);
        
        request.input('ID_UNID_CD_UNIDADE', idUnidade);

        request.execute('pr_CA_EST_CORP_s_UnidadeAtendimentoById')

        .then(function (recordset) {    

            unidadeAtendimento = {};

            if(recordset.recordset[0]) {   
                
                unidadeAtendimento = recordset.recordset[0];

            if(unidadeAtendimento.ativo === null){
                unidadeAtendimento.ativo = true;
            }else{
                unidadeAtendimento.ativo = false;
            }

            if(unidadeAtendimento.classificacao === '1'){
                unidadeAtendimento.classificacao = 'SEM_CLASSIFICACAO_ESPECIAL';
            }else if(unidadeAtendimento.classificacao === '9'){
                unidadeAtendimento.classificacao = 'ATENDIMENTO_MOVEL';
            }else{
                unidadeAtendimento.classificacao = null;
            }

            if(unidadeAtendimento.linhaNegocio === 'CH'){
                unidadeAtendimento.linhaNegocio = 'CHECKUP';
            }else if(unidadeAtendimento.linhaNegocio === 'HO'){
                unidadeAtendimento.linhaNegocio = 'HOSPITAL';
            }else if(unidadeAtendimento.linhaNegocio === 'UA'){
                unidadeAtendimento.linhaNegocio = 'ATENDIMENTO';
            }else{
                unidadeAtendimento.linhaNegocio = null;
            }

            }
        

            callback(unidadeAtendimento);
            console.log('');
            console.log('unidadeAtendimentoDAO - callProcedureUnidadeAtendimentoPorId : '+JSON.stringify(unidadeAtendimento));

            
        })
        .catch(function (err) {
            //UNIDADE ATENDIMENTO NÃO LOCALIZADA
            console.log('');
            console.log('unidadeAtendimentoDAO - Não foi possível localizar a unidade atendimento.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('unidadeAtendimentoDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};