var express = require('express');
var route = express.Router();
var pessoaFisicaController = require('../../controllers/pessoas-fisicas/pessoaFisicaController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');



/**
* @api {get} /v1/pessoas/:idPessoa - Retonar informações de pessoaFisica
* @apiName API Novo Agendamento
* @apiGroup pessoaFisica
*
* @apiParam {Number} idPessoa - Identificação de pessoaFisica.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*        {
*            "id": 46764,
*            "nome": "ADELAIDE FLORENCIO JUREMA",
*            "titulo": "Dra.",
*            "sexo": "FEMININO",
*            "dataNascimento": "1979-06-09",
*            "dataNascimentoFicticia": false,
*            "emails": [
*                {
*                    "endereco": null,
*                    "notificacao": false
*                },
*                {
*                    "endereco": null,
*                    "notificacao": true
*                },
*                {
*                    "endereco": null,
*                    "notificacao": true
*                },
*                {
*                    "endereco": null,
*                    "notificacao": true
*                },
*                {
*                    "endereco": null,
*                    "notificacao": true
*                },
*                {
*                    "endereco": null,
*                    "notificacao": true
*                },
*                {
*                    "endereco": null,
*                    "notificacao": true
*                }
*            ],
*            "telefones": [
*                {
*                    "ddi": null,
*                    "ddd": 11,
*                    "numero": null,
*                    "ramal": null,
*                    "tipo": "C. RESI.",
*                    "notificacao": false,
*                    "divulgacao": false
*                },
*                {
*                    "ddi": null,
*                    "ddd": null,
*                    "numero": null,
*                    "ramal": null,
*                    "tipo": "E-MAIL",
*                    "notificacao": true,
*                    "divulgacao": false
*                },
*                {
*                    "ddi": null,
*                    "ddd": null,
*                    "numero": null,
*                    "ramal": null,
*                    "tipo": "C. CONS.",
*                    "notificacao": true,
*                    "divulgacao": false
*                },
*                {
*                    "ddi": null,
*                    "ddd": 11,
*                    "numero": null,
*                    "ramal": null,
*                    "tipo": "TEL. RESIDENCIAL",
*                    "notificacao": true,
*                    "divulgacao": true
*                },
*                {
*                    "ddi": null,
*                    "ddd": 11,
*                    "numero": null,
*                    "ramal": null,
*                    "tipo": "CELULAR",
*                    "notificacao": true,
*                    "divulgacao": false
*                },
*                {
*                    "ddi": null,
*                    "ddd": 11,
*                    "numero": null,
*                    "ramal": null,
*                    "tipo": "CELULAR",
*                    "notificacao": true,
*                    "divulgacao": false
*                },
*                {
*                    "ddi": null,
*                    "ddd": 11,
*                    "numero": null,
*                    "ramal": null,
*                    "tipo": "TEL. COMERCIAL",
*                    "notificacao": true,
*                    "divulgacao": true
*                }
*            ],
*            "endereco": {
*                "pais": "BR",
*                "estado": "SP",
*                "cidade": "GUARULHOS",
*                "bairro": "JARDIM SANTA MARIA",
*                "logradouro": "RUA MERCURIO",
*                "numero": null,
*                "complemento": null,
*                "cep": "07133470"
*            },
*            "documentoProfissional": {
*                "ativo": 1,
*                "tipo": "CRM",
*                "numero": "9829",
*                "uf": "SP",
*                "profissionalFleury": true
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
route.get('/:idPessoa',async function(req,res){
    var idPessoa = req.params.idPessoa;
    pessoaFisicaController.pessoaFisicaPorId(idPessoa, function(resp){    

        errorHandler.handle(resp,res);
           
        console.log('');
        console.log('pessoaFisicaRoutes - get : '+JSON.stringify(resp));
    });
});



 module.exports = route;