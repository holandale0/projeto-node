var express = require('express');
var route = express.Router();
var planoSaudeController = require('../../controllers/convenios/planoSaudeController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


/**
* @api {get} /v1/planos/:idPlano - Retonar informações de plano de saúde
* @apiName API Novo Agendamento
* @apiGroup plano
*
* @apiParam {Number} idPlano - Identificação de plano.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "id": 232,
*            "ativo": true,
*            "nome": "Especial                      ",
*            "convenio": 42,
*            "empresa": 56,
*            "internet": true,
*            "exigeCrm": true,
*            "validadeDe": "1900-01-01T00:00:00.000Z",
*            "validadeAte": "9999-12-31T00:00:00.000Z"
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
route.get('/:idPlano',async function(req,res){
    var idPlano = req.params.idPlano;
    planoSaudeController.planoSaudePorId(idPlano, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('planoSaudeRoutes - get : '+JSON.stringify(resp));
    });
});

module.exports = route;