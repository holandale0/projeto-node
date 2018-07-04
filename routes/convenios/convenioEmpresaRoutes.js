var express = require('express');
var route = express.Router();
var convenioEmpresaController = require('../../controllers/convenios/convenioEmpresaController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');

/**
* @api {get} /v1/convenioEmpresas/:code - Retonar informações de convenioEmpresa
* @apiName API Novo Agendamento
* @apiGroup convenioEmpresa
*
* @apiParam {String} code - Identificação de convenioEmpresa.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*   {
*      "code": "55|70",
*      "ativo": false,
*      "convenio": 55,
*      "empresa": 70,
*      "internet": true,
*      "validaReceita": 0
*   }
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
route.get('/:code',async function(req,res){
    var code = req.params.code;
    convenioEmpresaController.convenioEmpresaPorId(code, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('convenioEmpresaRoutes - get : '+JSON.stringify(resp));
    });
});


 module.exports = route;