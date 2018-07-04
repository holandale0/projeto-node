var express = require('express');
var route = express.Router();
var controller = require('../../controllers/estrutura-corporativa/unidadeFisicaController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


 /**
* @api {get} /v1/unidadesFisicas/:idUnidade - Retonar informações de unidadeFisica
* @apiName API Novo Agendamento
* @apiGroup unidadeFisica
*
* @apiParam {Number} idUnidade - Identificação de unidadeFisica.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "id": 100,
*            "ativo": true,
*            "nome": "ALPHAVILLE",
*            "regional": "",
*            "endereco": {
*                "pais": "BR",
*                "estado": "SP",
*                "cidade": "Barueri                                 ",
*                "bairro": "Tamboré",
*                "logradouro": "Alameda Araguaia",
*                "numero": "2400",
*                "complemento": "",
*                "cep": "06455000"
*            }
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
    controller.unidadeFisicaPorId(idUnidade, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('unidadeFisicaRoutes - get : '+JSON.stringify(resp));
    });
});


 module.exports = route;