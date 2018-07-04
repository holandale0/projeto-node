var dao = require('../../daos/estrutura-corporativa/horarioFuncionamentoDAO');
var util = require('util');
var horarioFuncionamento = require('../../models/estrutura-corporativa/horarioFuncionamento');



// PROCEDURES

exports.horarioFuncionamentoPorId = function(idHorario,callback){

    dao.callProcedureHorarioFuncionamentoPorId(idHorario,function (horarioFuncionamento, err) {

        if(err){
            callback(err);  
            console.log('');
            console.log('horarioFuncionamentoController - Error: '+err.code);
        }else{
            callback(horarioFuncionamento);  
            console.log('');
            console.log('horarioFuncionamentoController - horarioFuncionamentoPorId : '+JSON.stringify(horarioFuncionamento));
        }

    });
};