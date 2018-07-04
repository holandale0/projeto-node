var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var cobertura = require('../../models/convenios/cobertura');



//CONSULTAR COBERTURA POR ID

exports.callProcedureCoberturaPorId = function(idConvenio,idEmpresa,idPlano,idProduto,idUnidade,callback){

    callback = callback || function(){};
    let conn = new mssql.ConnectionPool(config);

    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);

        if((idConvenio === null || idConvenio.replace(/\s+/g,"") === '' || isNaN(idConvenio) === true) && 
           (idEmpresa === null || idEmpresa.replace(/\s+/g,"") === '' || isNaN(idEmpresa) === true) && 
           (idPlano === null || idPlano.replace(/\s+/g,"") === '' || isNaN(idPlano) === true)){

            request.input('ID_CONV_CD_CONVENIO', null);
            request.input('ID_EMCV_CD_EMPRCONVENIO', null);
            request.input('ID_PLSA_CD_PLANOSAUDE', null);

        }else{

            request.input('ID_CONV_CD_CONVENIO', idConvenio);
            request.input('ID_EMCV_CD_EMPRCONVENIO', idEmpresa);
            request.input('ID_PLSA_CD_PLANOSAUDE', idPlano);
            
        }


        request.input('ID_PROD_CD_PRODUTO', idProduto);
        request.input('ID_UNID_CD_UNIDADE', idUnidade);
        request.execute('pr_CA_CONV_s_CoberturaByID')

        .then(function (recordset) {    

            cobertura = {};

            if(recordset.recordset[0]){
                
                    cobertura = recordset.recordset[0];
    
                    // VERIFICA A DATA DE INICIO E FIM DA COBETURA
                    if(cobertura.inicioVigendia  !== null && cobertura.fimVigencia === null){

                        //VERIFICA SE A DATA DE FIM DA COBERTURA É MENOR QUE A DATA ATUAL
                        if(cobertura.fimVigencia < Date.now()){
                            cobertura.permiteAgendar = false;
                        }else{
                            cobertura.permiteAgendar = true;
                        }  

                    }else{

                        cobertura.permiteAgendar = false;

                    }

                    // SE FOR PARTICULAR (ID_CONVENIO, ID_EMPRESA e ID_PLANO NULOS) SETA permiteAgendar = true
                    if((cobertura.convenio === null) && (cobertura.empresa === null) && (cobertura.plano === null)){
                        cobertura.permiteAgendar = true;
                    }

                    if(cobertura.preco === null){
                        cobertura.preco = 0;
                    }
                
            }


           
            
            callback(cobertura);
            console.log('');
            console.log('coberturaDAO - callProcedureCoberturaPorId : '+JSON.stringify(cobertura));
            
        })
        .catch(function (err) {
            // COBERTURA NÃO ENCONTRADA
            console.log('');
            console.log('coberturaDAO - Não foi possível localizar a cobertura.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        // ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('coberturaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};











































exports.callProcedureCoberturaPorIdAsync = async function(idConvenio,idEmpresa,idPlano,idProduto,idUnidade){

    let conn = await new mssql.ConnectionPool(config);

    conn.connect()
    .then(async function () {

        let request = await new mssql.Request(conn);

        if((idConvenio === null || idConvenio.replace(/\s+/g,"") === '' || isNaN(idConvenio) === true) && 
           (idEmpresa === null || idEmpresa.replace(/\s+/g,"") === '' || isNaN(idEmpresa) === true) && 
           (idPlano === null || idPlano.replace(/\s+/g,"") === '' || isNaN(idPlano) === true)){

            request.input('ID_CONV_CD_CONVENIO', null);
            request.input('ID_EMCV_CD_EMPRCONVENIO', null);
            request.input('ID_PLSA_CD_PLANOSAUDE', null);

        }else{

            request.input('ID_CONV_CD_CONVENIO', idConvenio);
            request.input('ID_EMCV_CD_EMPRCONVENIO', idEmpresa);
            request.input('ID_PLSA_CD_PLANOSAUDE', idPlano);
            
        }


        request.input('ID_PROD_CD_PRODUTO', idProduto);
        request.input('ID_UNID_CD_UNIDADE', idUnidade);
        request.execute('pr_CA_CONV_s_CoberturaByID')

        .then(async function (recordset) {    

            cobertura = {};

            if(recordset.recordset[0]){
                
                    cobertura = await recordset.recordset[0];
    
                    // VERIFICA A DATA DE INICIO E FIM DA COBETURA
                    if(cobertura.inicioVigendia  !== null && cobertura.fimVigencia === null){

                        //VERIFICA SE A DATA DE FIM DA COBERTURA É MENOR QUE A DATA ATUAL
                        if(cobertura.fimVigencia < Date.now()){
                            cobertura.permiteAgendar = await false;
                        }else{
                            cobertura.permiteAgendar = await true;
                        }  

                    }else{

                        cobertura.permiteAgendar = await false;

                    }

                    // SE FOR PARTICULAR (ID_CONVENIO, ID_EMPRESA e ID_PLANO NULOS) SETA permiteAgendar = true
                    if((cobertura.convenio === null) && (cobertura.empresa === null) && (cobertura.plano === null)){
                        cobertura.permiteAgendar = await true;
                    }

                    if(cobertura.preco === null){
                        cobertura.preco = await 0;
                    }
                
            }       
            
            //console.log('');
            //console.log('coberturaDAO - callProcedureCoberturaPorId : '+JSON.stringify(cobertura));
            
            return await cobertura;


            
        })
        .catch(async function (err) {
            // COBERTURA NÃO ENCONTRADA
            return await err;
            //console.log('');
            //console.log('coberturaDAO - Não foi possível localizar a cobertura.');
            //console.log(err);
        });
    })
    .catch(async function (err) {
        // ERRO DE CONEXÃO COM BD
        return await err;
        //console.log('');
        //console.log('coberturaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        //console.log(err);
    });
};






















