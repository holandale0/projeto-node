var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var unidadeFisica = require('../../models/estrutura-corporativa/unidadeFisica');
var endereco = require('../../models/estrutura-corporativa/endereco');



//CONSULTAR UNIDADE FISICA POR ID
exports.callProcedureUnidadeFisicaPorId = function(idUnidade,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);
        
        request.input('ID_UNID_CD_UNIDADE', idUnidade);

        request.execute('pr_CA_EST_CORP_s_UnidadeFisicaById')

        .then(function (recordset) {    

            unidadeFisica = {};
            endereco = {};

            if(recordset.recordset[0]) {   
                
                unidadeFisica.id = recordset.recordset[0].id;
                unidadeFisica.ativo = recordset.recordset[0].ativo;
                unidadeFisica.nome = recordset.recordset[0].nome;
                unidadeFisica.regional = recordset.recordset[0].regional;

                endereco.pais = recordset.recordset[0].pais;
                endereco.estado = recordset.recordset[0].estado;
                endereco.cidade = recordset.recordset[0].cidade;
                endereco.bairro = recordset.recordset[0].bairro;
                endereco.logradouro = recordset.recordset[0].logradouro;
                endereco.numero = recordset.recordset[0].numero;
                endereco.complemento = recordset.recordset[0].complemento;
                endereco.cep = recordset.recordset[0].cep;

                unidadeFisica.endereco = endereco;

            if(unidadeFisica.ativo === null){
                unidadeFisica.ativo = true;
            }else{
                unidadeFisica.ativo = false;
            }

            }
        

            callback(unidadeFisica);
            console.log('');
            console.log('unidadeFisicaDAO - callProcedureUnidadeFisicaPorId : '+JSON.stringify(unidadeFisica));

            
        })
        .catch(function (err) {
            //UNIDADE FISICA NÃO LOCALIZADA
            console.log('');
            console.log('unidadeFisicaDAO - Não foi possível localizar a unidade fisica.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('unidadeFisicaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};