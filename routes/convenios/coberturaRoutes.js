var express = require('express');
var route = express.Router();
var coberturaController = require('../../controllers/convenios/coberturaController');
var errorHandler = require('../errorHandlerRoutes');
var util = require('util');

/**
* @api {get} /v1/coberturas/:idConvenio/:idEmpresa/:idPlano/:idProduto/:idUnidade - Retonar informações de cobertura
* @apiName API Novo Agendamento
* @apiGroup cobertura
*
* @apiParam {Number} idConvenio - Identificação do convênio.
* @apiParam {Number} idEmpresa - Identificação do empresa.
* @apiParam {Number} idPlano - Identificação do plano.
* @apiParam {Number} idProduto - Identificação do produto.
* @apiParam {Number} idUnidade - Identificação do unidade.
* 
*
* @apiSuccessExample Sucesso:
*     HTTP/1.1 200 OK
*    {
*        "convenio": 8,
*        "empresa": 139,
*        "plano": 70,
*        "produto": 1,
*        "unidade": 118,
*        "permiteAgendar": false,
*        "preco": 172.32,
*        "inicioVigencia": "1998-12-05T00:00:00.000Z",
*        "fimVigencia": null,
*        "inicioBloqueio": null,
*        "docAutorizacao": null
*    }
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




route.get('/:idConvenio/:idEmpresa/:idPlano/:idProduto/:idUnidade',async function(req,res){
    
    var idConvenio = req.params.idConvenio;
    var idEmpresa = req.params.idEmpresa;
    var idPlano = req.params.idPlano;
    var idProduto = req.params.idProduto;
    var idUnidade = req.params.idUnidade;

    coberturaController.coberturaPorId(idConvenio,idEmpresa,idPlano,idProduto,idUnidade, function(resp){

        errorHandler.handle(resp,res);

        console.log('');
        console.log('coberturaRoutes - get : '+JSON.stringify(resp));

    });
});

route.get('/async/:idConvenio/:idEmpresa/:idPlano/:idProduto/:idUnidade',async function(req,res){
    
    var idConvenio = await req.params.idConvenio;
    var idEmpresa = await req.params.idEmpresa;
    var idPlano = await req.params.idPlano;
    var idProduto = await req.params.idProduto;
    var idUnidade = await req.params.idUnidade;   

    coberturaController.coberturaPorIdAsync(idConvenio,idEmpresa,idPlano,idProduto,idUnidade, async function(resp){

        console.log('');
        console.log('coberturaRoutes - get : '+JSON.stringify(resp));
        
        return await errorHandler.handle(resp,res);



    });

});























/*
route.get('/:idConvenio/:idEmpresa/:idPlano/:idProduto/:idUnidade',async function(req,res){
    
    var idConvenio = req.params.idConvenio;
    var idEmpresa = req.params.idEmpresa;
    var idPlano = req.params.idPlano;
    var idProduto = req.params.idProduto;
    var idUnidade = req.params.idUnidade;

    var resp = await coberturaController.coberturaPorId2(idConvenio,idEmpresa,idPlano,idProduto,idUnidade);

        errorHandler.handle(resp,res);

        console.log('');
        console.log('coberturaRoutes - get : '+JSON.stringify(resp));

    
});

*/

 module.exports = route;