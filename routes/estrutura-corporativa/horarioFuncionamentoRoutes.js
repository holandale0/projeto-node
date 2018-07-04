var express = require('express');
var route = express.Router();
var horarioFuncionamentoController = require('../../controllers/estrutura-corporativa/horarioFuncionamentoController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


/**
* @api {get} /v1/horariosFuncionamento/:idHorario - Retonar informações de horarioFuncionamento
* @apiName API Novo Agendamento
* @apiGroup horarioFuncionamento
*
* @apiParam {Number} idHorario - Identificação de horarioFuncionamento.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "id": 120,
*            "domingo": {},
*            "segunda": {
*                "horaInicio": "06:30",
*                "horaFim": "15:00",
*                "horaInicioColeta": "06:30",
*                "horaFimColeta": "12:30"
*            },
*            "terca": {
*                "horaInicio": "06:30",
*                "horaFim": "15:00",
*                "horaInicioColeta": "06:30",
*                "horaFimColeta": "12:30"
*            },
*            "quarta": {
*                "horaInicio": "06:30",
*                "horaFim": "15:00",
*                "horaInicioColeta": "06:30",
*                "horaFimColeta": "12:30"
*            },
*            "quinta": {
*                "horaInicio": "06:30",
*                "horaFim": "15:00",
*                "horaInicioColeta": "06:30",
*                "horaFimColeta": "12:30"
*            },
*            "sexta": {
*                "horaInicio": "06:30",
*                "horaFim": "15:00",
*                "horaInicioColeta": "06:30",
*                "horaFimColeta": "12:30"
*            },
*            "sabado": {
*                "horaInicio": "06:30",
*                "horaFim": "12:30",
*                "horaInicioColeta": "06:30",
*                "horaFimColeta": "12:00"
*            },
*            "feriado": {}
*        }
*
*
* @apiError FleuryApiNovoAgendamentoNotFound - Informações não localizadas.
* @apiError FleuryApiNovoAgendamentoRequestTimeout - Tempo de requisição expirado.
* @apiError FleuryApiNovoAgendamentoConnectionTimeout - Tempo de resposta do banco de dados expirado.
* @apiError FleuryApiNovoAgendamentoRequestCanceled - Requisição cancelada pelo cliente.
* @apiError FleuryApiNovoAgendamentoForbidden - Acesso não autorizado.
* @apiError FleuryApiNovoAgendamentoInternalServerError - Erro interno do servidor.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "FleuryApiNovoAgendamentoNotFound"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 408 Request Timeout
*     {
*       "error": "FleuryApiNovoAgendamentoRequestTimeout"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 504 Connection Timeout
*     {
*       "error": "FleuryApiNovoAgendamentoConnectionTimeout"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 499 Request Canceled
*     {
*       "error": "FleuryApiNovoAgendamentoRequestCanceled"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 403 Forbidden
*     {
*       "error": "FleuryApiNovoAgendamentoForbidden"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 500 Internal Server Error
*     {
*       "error": "FleuryApiNovoAgendamentoInternalServerError"
*     }
*/
route.get('/:idHorario',async function(req,res){
    var idHorario = req.params.idHorario;
    horarioFuncionamentoController.horarioFuncionamentoPorId(idHorario, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('horarioFuncionamentoRoutes - get : '+JSON.stringify(resp));
    });
});


 module.exports = route;