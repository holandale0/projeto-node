var express = require('express');
var route = express.Router();
var controller = require('../../controllers/notificacoes/notificacaoFleuryController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');

 /**
* @api {get} /v1/fleury/notificacoes/:tipo/:inicio - Retonar informações de notificacaoFleury
* @apiName API Novo Agendamento
* @apiGroup notificacaoFleury
*
* @apiParam {String} tipo - Identificação de tipo de notificação.
* @apiParam {Date} inicio - Data de inicio.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        [
*            {
*                "id": null,
*                "code": "AM",
*                "tipo": "MARCA",
*                "instante": null
*            },
*            {
*                "id": null,
*                "code": "CP",
*                "tipo": "MARCA",
*                "instante": null
*            },
*            {
*                "id": null,
*                "code": "FL",
*                "tipo": "MARCA",
*                "instante": null
*            },
*            {
*                "id": null,
*                "code": "FM",
*                "tipo": "MARCA",
*                "instante": null
*            },
*            {
*                "id": null,
*                "code": "LA",
*                "tipo": "MARCA",
*                "instante": null
*            },
*            {
*                "id": null,
*                "code": "NO",
*                "tipo": "MARCA",
*                "instante": null
*            },
*            {
*                "id": null,
*                "code": "WE",
*                "tipo": "MARCA",
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
    controller.notificacoesFleury(tipo,inicio, function(resp){      

        errorHandler.handle(resp,res);
        
        console.log('');
        console.log('notificacaoFleuryRoutes - get : '+JSON.stringify(resp));
    });
});




 module.exports = route;