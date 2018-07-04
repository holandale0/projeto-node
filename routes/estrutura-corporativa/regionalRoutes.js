var express = require('express');
var route = express.Router();
var regionalController = require('../../controllers/estrutura-corporativa/regionalController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


/**
* @api {get} /v1/regionais/:idRegional - Retonar informações de regional
* @apiName API Novo Agendamento
* @apiGroup regional
*
* @apiParam {String} idRegional - Identificação de regional.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "code": "BA",
*            "ativo": true,
*            "sigla": "Bahia"
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
route.get('/:idRegional',async function(req,res){
    var idRegional = req.params.idRegional;
    regionalController.regionalPorId(idRegional, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('regionalRoutes - get : '+JSON.stringify(resp));
    });
});


 module.exports = route;