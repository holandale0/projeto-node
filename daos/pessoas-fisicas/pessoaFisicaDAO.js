var db_settings = require('../../settings/db_settings');
var mssql = db_settings.mssql;
var config = { user: db_settings.user, password: db_settings.password, server: db_settings.server, driver: db_settings.driver, database: db_settings.database, port: db_settings.port }; 
var pessoaFisica = require('../../models/pessoas-fisicas/pessoaFisica');
var emails = require('../../models/pessoas-fisicas/emails');
var email = require('../../models/pessoas-fisicas/emails');
var telefones = require('../../models/pessoas-fisicas/telefones');
var telefone = require('../../models/pessoas-fisicas/telefones');
//var enderecos = require('../../models/pessoas-fisicas/enderecos');
var endereco = require('../../models/pessoas-fisicas/enderecos');
var documentoProfissional = require('../../models/pessoas-fisicas/documentoProfissional');




//CONSULTAR PESSOA FISICA POR ID
exports.callProcedurePessoaFisicaPorId = function (idPessoaParam, callback) {

    var idPessoa = idPessoaParam;

    callback = callback || function () { };

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
        .then(function () {

            //PESSOA FISICA
            var request = new mssql.Request(conn);

            request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
            request.execute('pr_CA_PESS_FIS_s_PessoaFisicaById')

                .then(function (recordset) {

                    pessoaFisica = {};

                    if (recordset.recordset[0]) {

                        pessoaFisica = recordset.recordset[0];

                        if(pessoaFisica.dataNascimentoFicticia === 'S'){
                            pessoaFisica.dataNascimentoFicticia = true;
                        }else{
                            pessoaFisica.dataNascimentoFicticia = false;
                        }

                        if(pessoaFisica.sexo === 'M'){
                            pessoaFisica.sexo = 'MASCULINO'
                        }else if(pessoaFisica.sexo === 'F'){
                            pessoaFisica.sexo = 'FEMININO'
                        }

                        pessoaFisica.dataNascimento = pessoaFisica.dataNascimento.toISOString().split("T")[0];

                    } else {

                        pessoaFisica = {};

                    }

                })

            //CONTATOS
            request = new mssql.Request(conn);

            request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
            request.execute('pr_CA_PESS_FIS_s_ContatosPessoaFisicaById')
                .then(function (recordset2) {


                    emails = [];
                    telefones = [];
                    var i;

                    if (recordset2.recordset[0]) {

                        for (i = 0; i < recordset2.recordset.length; i++) {

                            email = {};
                            telefone = {};

                            email.endereco = recordset2.recordset[i].endereco;
                            email.notificacao = recordset2.recordset[i].notificacao;

                            telefone.ddi = recordset2.recordset[i].ddi;
                            telefone.ddd = recordset2.recordset[i].ddd;
                            telefone.numero = recordset2.recordset[i].numero;
                            telefone.ramal = recordset2.recordset[i].ramal;
                            telefone.tipo = recordset2.recordset[i].tipo;
                            telefone.notificacao = recordset2.recordset[i].notificacao;
                            telefone.divulgacao = recordset2.recordset[i].divulgacao;

                            if (email.notificacao === 'S') {
                                email.notificacao = true;
                            } else {
                                email.notificacao = false;
                            }

                            if (telefone.notificacao === 'S') {
                                telefone.notificacao = true;
                            } else {
                                telefone.notificacao = false;
                            }

                            if (telefone.divulgacao === 'S') {
                                telefone.divulgacao = true;
                            } else {
                                telefone.divulgacao = false;
                            }

                            if(telefone.tipo === 1){
                                telefone.tipo = 'TEL. RESIDENCIAL'
                            }else if(telefone.tipo === 2){
                                telefone.tipo = 'FAX RESICENCIAL'
                            }else if(telefone.tipo === 3){
                                telefone.tipo = 'PAGER'
                            }else if(telefone.tipo === 4){
                                telefone.tipo = 'E-MAIL'
                            }else if(telefone.tipo === 5){
                                telefone.tipo = 'CELULAR'
                            }else if(telefone.tipo === 6){
                                telefone.tipo = 'TEL. COMERCIAL'
                            }else if(telefone.tipo === 7){
                                telefone.tipo = 'FAX COMERCIAL'
                            }else if(telefone.tipo === 8){
                                telefone.tipo = 'C. RESI.'
                            }else if(telefone.tipo === 9){
                                telefone.tipo = 'C. ESCR.'
                            }else if(telefone.tipo === 10){
                                telefone.tipo = 'C. CONS.'
                            }else if(telefone.tipo === 11){
                                telefone.tipo = 'C. HOSP.'
                            }else if(telefone.tipo === 13){
                                telefone.tipo = 'FACEBOOK'
                            }else if(telefone.tipo === 14){
                                telefone.tipo = 'TWITTER'
                            }else if(telefone.tipo === 15){
                                telefone.tipo = 'WHATZAPP'
                            }

                            emails.push(email);

                            telefones.push(telefone);

                        }


                    } else {

                        emails = {};
                        telefones = {};

                    }

                })

            // ENDEREÇO
            request = new mssql.Request(conn);

            request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
            request.execute('pr_CA_PESS_FIS_s_EnderecoPessoaFisicaById')
                .then(function (recordset3) {

                    //enderecos = [];
                    endereco = {}
                    var j;

                    if (recordset3.recordset[0]) {

                        endereco = recordset3.recordset[0];

                    } else {

                        endereco = {};

                    }

                })

            //DOCUMENTO PROFISSIONAL
            request = new mssql.Request(conn);

            request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
            request.execute('pr_CA_PESS_FIS_s_ProfissionalSaudeById')
                .then(function (recordset4) {

                    documentoProfissional = {};

                    if (recordset4.recordset[0]) {

                        documentoProfissional = recordset4.recordset[0];

                        if(documentoProfissional.profissionalFleury === null){
                            documentoProfissional.profissionalFleury = false;     
                        }else{
                            documentoProfissional.profissionalFleury = true; 
                        }

                    } else {
                        documentoProfissional = {};
                    }

                    pessoaFisica.emails = emails;
                    pessoaFisica.telefones = telefones;
                    pessoaFisica.endereco = endereco;
                    pessoaFisica.documentoProfissional = documentoProfissional;

                    callback(pessoaFisica);
                    console.log('');
                    console.log('pessoaFisicaDAO - callProcedurePessoaFisicaPorId : ' + JSON.stringify(pessoaFisica));

                })
                .catch(function (err) {
                    //PESSOA FISICA NÃO LOCALIZADA
                    console.log('');
                    console.log('pessoaFisicaDAO - Não foi possível localizar a pessoa fisica.');
                    console.log(err);
                    callback(null, err);
                });
        })
        .catch(function (err) {
            //ERRO DE CONEXÃO COM BD
            console.log('');
            console.log('pessoaFisicaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
            console.log(err);
            callback(null, err);
        });
};






































































//CONSULTAR PESSOA FISICA POR ID
exports.callProcedurePessoaFisicaPorId_OLD = function(idPessoaParam,callback){

    var idPessoa = idPessoaParam;

    callback = callback || function(){};

    let conn = new mssql.ConnectionPool(config);
    conn.connect()
    .then(function () {

        var request = new mssql.Request(conn);
        
        request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
        request.execute('pr_CA_PESS_FIS_s_PessoaFisicaById')
        .then(function (recordset) {    

            pessoaFisica = {};

            if(recordset.recordset[0]) {                

                pessoaFisica = recordset.recordset[0];

                //CONTATOS

                request = new mssql.Request(conn);

                request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
                request.execute('pr_CA_PESS_FIS_s_ContatosPessoaFisicaById')
                .then(function (recordset2) {

                    
                    emails = [];
                    telefones = [];
                    var i;

                    if(recordset2.recordset[0]) {

                        for(i = 0 ; i < recordset2.recordset.length ; i++){

                            email = {};
                            telefone = {};

                            email.endereco = recordset2.recordset[i].endereco;
                            email.notificacao = recordset2.recordset[i].notificacao;

                            telefone.ddi = recordset2.recordset[i].ddi;
                            telefone.ddd = recordset2.recordset[i].ddd;
                            telefone.numero = recordset2.recordset[i].numero;
                            telefone.ramal = recordset2.recordset[i].ramal;
                            telefone.tipo = recordset2.recordset[i].tipo;
                            telefone.notificacao = recordset2.recordset[i].notificacao;
                            telefone.divulgacao = recordset2.recordset[i].divulgacao;

                            if(email.notificacao === 'S'){
                                email.notificacao = true;
                            }else{
                                email.notificacao = false;
                            }

                            if(telefone.notificacao === 'S'){
                                telefone.notificacao = true;
                            }else{
                                telefone.notificacao = false;
                            }

                            if(telefone.divulgacao === 'S'){
                                telefone.divulgacao = true;
                            }else{
                                telefone.divulgacao = false;
                            }

                            emails.push(email);

                            telefones.push(telefone);

                        }


                    }else{

                        emails = {};
                        telefones = {};

                    }


                })
                .catch(function (err) {
                    //CONTATOS DE PESSOA FISICA NÃO LOCALIZADOS
                    console.log('');
                    console.log('pessoaFisicaDAO - Não foi possível localizar os contatos da pessoa fisica.');
                    console.log(err);
                    callback(null,err);
                });

                // ENDEREÇO

                request = new mssql.Request(conn);

                request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
                request.execute('pr_CA_PESS_FIS_s_EnderecoPessoaFisicaById')
                .then(function (recordset3) {

                    //enderecos = [];
                    endereco = {}
                    var j;

                    if(recordset3.recordset[0]) {

                        endereco = recordset3.recordset[0];
                        
                        /*
                        for(j = 0 ; j < recordset3.recordset.length ; j++){

                            endereco.pais = recordset3.recordset[j].pais;
                            endereco.estado = recordset3.recordset[j].estado;
                            endereco.cidade = recordset3.recordset[j].cidade;
                            endereco.bairro = recordset3.recordset[j].bairro;
                            endereco.logradouro = recordset3.recordset[j].logradouro;
                            endereco.numero = recordset3.recordset[j].numero;
                            endereco.complemento = recordset3.recordset[j].complemento;
                            endereco.cep = recordset3.recordset[j].cep;
                            enderecos.push(endereco);
                        }  
                        */
                                           

                    }else{

                        endereco = {};

                    }

                })
                .catch(function (err) {
                    //ENDEREÇOS DE PESSOA FISICA NÃO LOCALIZADOS
                    console.log('');
                    console.log('pessoaFisicaDAO - Não foi possível localizar endereços da pessoa fisica.');
                    console.log(err);
                    callback(null,err);
                });


                //DOCUMENTO PROFISSIONAL

                request = new mssql.Request(conn);

                request.input('ID_PEFI_CD_PESSOA_FISICA', idPessoa);
                request.execute('pr_CA_PESS_FIS_s_ProfissionalSaudeById')
                .then(function (recordset4) {

                    documentoProfissional = {};

                    if(recordset4.recordset[0]) {

                        documentoProfissional = recordset4.recordset[0];

                    }else{
                        documentoProfissional = {};
                    }                 

                })
                .catch(function (err) {
                    //DOCUMENTO PROFISSIONAL DE PESSOA FISICA NÃO LOCALIZADO
                    console.log('');
                    console.log('pessoaFisicaDAO - Não foi possível localizar o documento profissional da pessoa fisica.');
                    console.log(err);
                    callback(null,err);
                });

                pessoaFisica.emails = emails;
                pessoaFisica.telefones = telefones;
                pessoaFisica.endereco = endereco;
                pessoaFisica.documentoProfissional = documentoProfissional;

            }else{

                pessoaFisica = {};
                
            }                 

            callback(pessoaFisica);
            console.log('');
            console.log('pessoaFisicaDAO - callProcedurePessoaFisicaPorId : '+JSON.stringify(pessoaFisica));
            
        })
        .catch(function (err) {
            //PESSOA FISICA NÃO LOCALIZADA
            console.log('');
            console.log('pessoaFisicaDAO - Não foi possível localizar a pessoa fisica.');
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function (err) {
        //ERRO DE CONEXÃO COM BD
        console.log('');
        console.log('pessoaFisicaDAO - Erro ao tentar estabelecer conexão com banco de dados.');
        console.log(err);
        callback(null,err);
    });
};