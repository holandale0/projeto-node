var dao = require('../../daos/estrutura-corporativa/regionalDAO');
var util = require('util');
var regional = require('../../models/estrutura-corporativa/regional');



// PROCEDURES

exports.regionalPorId = function(idRegional,callback){

    dao.callProcedureRegionalPorId(idRegional,function (regional, err) {

        if(err){
            callback(err); 
            console.log('');
            console.log('regionalController - Error: '+err.code);
        }else{
            callback(regional);  
            console.log('');
            console.log('regionalController - regionalPorId : '+JSON.stringify(regional));
        }

    });
};