var express = require('express');
var route = express.Router();
var empresaController = require('../../controllers/convenios/empresaController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


/**
* @api {get} /v1/empresas/:idEmpresa - Retonar informações de empresa
* @apiName API Novo Agendamento
* @apiGroup empresa
*
* @apiParam {Number} idEmpresa - Identificação de empresa.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "id": 2,
*            "ativo": true,
*            "nome": "Care Plus Medicina Assistencial         "
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
route.get('/:idEmpresa',async function(req,res){
    var idEmpresa = req.params.idEmpresa;
    empresaController.empresaPorId(idEmpresa, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('empresaRoutes - get : '+JSON.stringify(resp));
    });
});




 module.exports = route;