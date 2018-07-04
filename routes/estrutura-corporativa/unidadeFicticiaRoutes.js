var express = require('express');
var route = express.Router();
var controller = require('../../controllers/estrutura-corporativa/unidadeFicticiaController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


 /**
* @api {get} /v1/unidadesFicticias/:idUnidade - Retonar informações de unidadeFicticia
* @apiName API Novo Agendamento
* @apiGroup unidadeFicticia
*
* @apiParam {Number} idUnidade - Identificação de unidadeFicticia.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "id": 115,
*            "ativo": false,
*            "nome": "ATEND. MÓVEL LIMÃO            ",
*            "unidadeAtendimento": null,
*            "agendamento": "N"
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
    controller.unidadeFicticiaPorId(idUnidade, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('unidadeFicticiaRoutes - get : '+JSON.stringify(resp));
    });
});


 module.exports = route;