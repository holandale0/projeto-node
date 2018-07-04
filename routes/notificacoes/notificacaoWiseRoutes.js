var express = require('express');
var route = express.Router();
var controller = require('../../controllers/notificacoes/notificacaoWiseController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');


 /**
* @api {get} /v1/wise/notificacoes/:tipo/:inicio - Retonar informações de notificacaoWise
* @apiName API Novo Agendamento
* @apiGroup notificacaoWise
*
* @apiParam {String} tipo - Identificação de tipo de notificação.
* @apiParam {Date} inicio - Data de inicio.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        [
*            {
*                "id": "",
*                "tipo": "REGIONAL",
*                "instante": null
*            },
*            {
*                "id": "BA",
*                "tipo": "REGIONAL",
*                "instante": null
*            },
*            {
*                "id": "DF",
*                "tipo": "REGIONAL",
*                "instante": null
*            },
*            {
*                "id": "PE",
*                "tipo": "REGIONAL",
*                "instante": null
*            },
*            {
*                "id": "PR",
*                "tipo": "REGIONAL",
*                "instante": null
*            },
*            {
*                "id": "RJ",
*                "tipo": "REGIONAL",
*                "instante": null
*            },
*            {
*                "id": "RS",
*                "tipo": "REGIONAL",
*                "instante": null
*            },
*            {
*                "id": "SP",
*                "tipo": "REGIONAL",
*                "instante": null
*            }
*        ]
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
route.get('/:tipo/:inicio',async function(req,res){
    var tipo = req.params.tipo;
    var inicio = req.params.inicio;
    controller.notificacoesWise(tipo,inicio, function(resp){

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('notificacaoWiseRoutes - get : '+JSON.stringify(resp));
    });
});




 module.exports = route;