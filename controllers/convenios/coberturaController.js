var dao = require('../../daos/convenios/coberturaDAO');
var util = require('util');
var cobertura = require('../../models/convenios/cobertura');







exports.coberturaPorId = function(idConvenio,idEmpresa,idPlano,idProduto,idUnidade,callback){

    dao.callProcedureCoberturaPorId(idConvenio,idEmpresa,idPlano,idProduto,idUnidade,function (cobertura, err) {

        if(err){
                callback(err); 
                console.log('');
                console.log('coberturaController - Error: '+err.code);
        }else{
            callback(cobertura);  
            console.log('');
            console.log('coberturaController - coberturaPorId : '+JSON.stringify(cobertura));
        }

    });
};




exports.coberturaPorIdAsync = async function(idConvenio,idEmpresa,idPlano,idProduto,idUnidade){

    dao.callProcedureCoberturaPorIdAsync(idConvenio,idEmpresa,idPlano,idProduto,idUnidade, async function (cobertura, err) {
      

        if(err){
            //console.log('');
            //console.log('coberturaController - Error: '+err.code);
            return await err;

        }else{
            //console.log('');
            //console.log('coberturaController - coberturaPorId : '+JSON.stringify(cobertura));
            return await cobertura;

        }

    });
};


































exports.coberturaPorId2 = async function(idConvenio,idEmpresa,idPlano,idProduto,idUnidade){

    var value =  await dao.callProcedureCoberturaPorId2(idConvenio,idEmpresa,idPlano,idProduto,idUnidade);

    console.log('-.-.-.-.-.-.-.-.-.-.-.-');
    console.log(value);
    console.log('-.-.-.-.-.-.-.-.-.-.-.-');

        if(value.err){
                //errorHandler.handle(value.err);
                console.log('');
                console.log('coberturaController - Error: '+value.err.code);
        }else{
            return value.cobertura;  
            //console.log('');
            //console.log('coberturaController - coberturaPorId : '+JSON.stringify(value.cobertura));
        }   
};
