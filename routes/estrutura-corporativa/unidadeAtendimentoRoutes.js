var express = require('express');
var route = express.Router();
var controller = require('../../controllers/estrutura-corporativa/unidadeAtendimentoController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


/**
* @api {get} /v1/unidadesAtendimento/:idUnidade - Retonar informações de unidadeAtendimento
* @apiName API Novo Agendamento
* @apiGroup unidadeAtendimento
*
* @apiParam {Number} idUnidade - Identificação de unidadeAtendimento.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "id": 100,
*            "ativo": true,
*            "nome": "ALPHAVILLE",
*            "unidadeFisica": "ALPHAVILLE",
*            "marca": "amais",
*            "classificacao": "ATENDIMENTO_MOVEL",
*            "linhaNegocio": "ATENDIMENTO",
*            "agendamento": "S"
*        }
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
route.get('/:idUnidade',async function(req,res){
    var idUnidade = req.params.idUnidade;
    controller.unidadeAtendimentoPorId(idUnidade, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('unidadeAtendimentoRoutes - get : '+JSON.stringify(resp));
    });
});


 module.exports = route;