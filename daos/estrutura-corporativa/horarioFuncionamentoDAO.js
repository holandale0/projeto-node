var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var horarioFuncionamento = require('../../models/estrutura-corporativa/horarioFuncionamento');



//CONSULTAR HORARIO DE FUNCIONAMENTO POR ID
exports.callProcedureHorarioFuncionamentoPorId = function(idHorario,callback){

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        let request = new mssql.Request(conn);
        
        request.input('ID_UNID_CD_UNIDADE', idHorario);

        request.execute('pr_CA_EST_CORP_s_HorarioFuncionamentoById')
        //request.query(sql)
        .then(function (recordset) {    

            horarioFuncionamento = {};

            let domingo = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};
            let segunda = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};
            let terca = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};
            let quarta = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};
            let quinta = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};
            let sexta = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};
            let sabado = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};
            let feriado = {horaInicio:String,horaFim:String,horaInicioColeta:String,horaFimColeta:String};

            let i;

            if(recordset.recordset[0]) {              

                for (i = 0 ; i < recordset.recordset.length ; i++ ) {                 
    
                    if(recordset.recordset[i].dia === 1){
                        domingo.horaInicio = recordset.recordset[i].horaInicio;
                        domingo.horaFim = recordset.recordset[i].horaFim;
                        domingo.horaInicioColeta = recordset.recordset[i].horaInicioColeta;
                        domingo.horaFimColeta = recordset.recordset[i].horaFimColeta;  
                    }else if(recordset.recordset[i].dia === 2){
                        segunda.horaInicio = recordset.recordset[i].horaInicio;
                        segunda.horaFim = recordset.recordset[i].horaFim;
                        segunda.horaInicioColeta = recordset.recordset[i].horaInicioColeta;
                        segunda.horaFimColeta = recordset.recordset[i].horaFimColeta;   
                    }else if(recordset.recordset[i].dia === 3){
                        terca.horaInicio = recordset.recordset[i].horaInicio;
                        terca.horaFim = recordset.recordset[i].horaFim;
                        terca.horaInicioColeta = recordset.recordset[i].horaInicioColeta;
                        terca.horaFimColeta = recordset.recordset[i].horaFimColeta;   
                    }else if(recordset.recordset[i].dia === 4){
                        quarta.horaInicio = recordset.recordset[i].horaInicio;
                        quarta.horaFim = recordset.recordset[i].horaFim;
                        quarta.horaInicioColeta = recordset.recordset[i].horaInicioColeta;
                        quarta.horaFimColeta = recordset.recordset[i].horaFimColeta; 
                    }else if(recordset.recordset[i].dia === 5){
                        quinta.horaInicio = recordset.recordset[i].horaInicio;
                        quinta.horaFim = recordset.recordset[i].horaFim;
                        quinta.horaInicioColeta = recordset.recordset[i].horaInicioColeta;
                        quinta.horaFimColeta = recordset.recordset[i].horaFimColeta; 
                    }else if(recordset.recordset[i].dia === 6){
                        sexta.horaInicio = recordset.recordset[i].horaInicio;
                        sexta.horaFim = recordset.recordset[i].horaFim;
                        sexta.horaInicioColeta = recordset.recordset[i].horaInicioColeta;
                        sexta.horaFimColeta = recordset.recordset[i].horaFimColeta; 
                    }else if(recordset.recordset[i].dia === 7){
                        sabado.horaInicio = recordset.recordset[i].horaInicio;
                        sabado.horaFim = recordset.recordset[i].horaFim;
                        sabado.horaInicioColeta = recordset.recordset[i].horaInicioColeta;
                        sabado.horaFimColeta = recordset.recordset[i].horaFimColeta;  
                    }
                }   

                horarioFuncionamento.id = recordset.recordset[0].id;
                horarioFuncionamento.domingo = domingo;
                horarioFuncionamento.segunda = segunda;
                horarioFuncionamento.terca = terca;
                horarioFuncionamento.quarta = quarta;
                horarioFuncionamento.quinta = quinta;
                horarioFuncionamento.sexta = sexta;
                horarioFuncionamento.sabado = sabado;
                horarioFuncionamento.feriado = feriado;

            }
        

            callback(horarioFuncionamento);
            console.log('');
            console.log('horarioFuncionamentoDAO - callProcedureHorarioFuncionamentoPorId : '+JSON.stringify(horarioFuncionamento));

            
        })
        .catch(function (err) {
            //HORARIO DE FUNCIONAMENO NÃO LOCALIZADO
            console.log('');
            console.log('horarioFuncionamentoDAO - Não foi possível localizar o horário.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('horarioFuncionamentoDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};