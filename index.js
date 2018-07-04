
//ARQUIVO DE CONFIGURAÇÕES DO APP
var app = require('./settings/app_settings');

//ARQUIVO DE CONFIGURAÇOES DE ACESSO AO BD
var connectionTest = require('./settings/db_settings');

//VERSÃO
var apiVersion = "v1";


//NOTIFICAÇÕES
var notificacoesFleury = require('./routes/notificacoes/notificacaoFleuryRoutes');
var notificacoesWise = require('./routes/notificacoes/notificacaoWiseRoutes');
//CONVÊNIOS
var convenios = require('./routes/convenios/convenioRoutes');
var empresas = require('./routes/convenios/empresaRoutes');
var convenioEmpresas = require('./routes/convenios/convenioEmpresaRoutes');
var planosSaude = require('./routes/convenios/planoSaudeRoutes');
var coberturas = require('./routes/convenios/coberturaRoutes');
//ESTRUTURA-CORPUTATIVA
var horariosFuncionamento = require('./routes/estrutura-corporativa/horarioFuncionamentoRoutes');
var marcas = require('./routes/estrutura-corporativa/marcaRoutes');
var regionais = require('./routes/estrutura-corporativa/regionalRoutes');
var unidadesFisicas = require('./routes/estrutura-corporativa/unidadeFisicaRoutes');
var unidadesFicticias = require('./routes/estrutura-corporativa/unidadeFicticiaRoutes');
var unidadesAtendimento = require('./routes/estrutura-corporativa/unidadeAtendimentoRoutes');
//PESSOAS-FISICAS
var pessoas = require('./routes/pessoas-fisicas/pessoaFisicaRoutes');



//TESTE DE CONEXÃO
try{
    connectionTest.connect();
    console.log('');
    console.log('Teste de conexão...');
}catch(ex){
    console.log('');
    console.log('Erro ao tentar estabelecer conexão com o BD ! '+ex);
}


//ROTA RAIZ (HOME)
app.get('/', function(req,res){ 
    res.status(200).send({
        title : "API CRM Microserviços",
        version : apiVersion,
        serviceList : [
            //MÓDULO NOTIFICAÇÕES
            {
				notificaoFleury : '/'+apiVersion+'/notificacoes/TIPO/YYYY-MM-DDTHH:MM:SSZ',
                notificaoWise : '/'+apiVersion+'/notificacoes/TIPO/YYYY-MM-DDTHH:MM:SSZ',
            },
            //MÓDULO CONVÊNIOS
            {
                convenio : '/'+apiVersion+'/convenios/ID',             
                empresa : '/'+apiVersion+'/empresas/ID',
                convenioEmpresa : '/'+apiVersion+'/convenioEmpresas/CODE',
                plano : '/'+apiVersion+'/planos/ID',
                cobertura : '/'+apiVersion+'/coberturas/ID_CONV/ID_EMP/ID_PLAN/ID_PROD/ID_UNI',
                cobertura_particular : '/'+apiVersion+'/coberturas/NULL/NULL/NULL/ID_PROD/ID_UNI'
            },
            //MÓDULO ESTRUTURA CORPORATIVA
            {
				horarioFuncionamento : '/'+apiVersion+'/horariosFuncionamento/ID',
				marca : '/'+apiVersion+'/marcas/CODE',
				regional : '/'+apiVersion+'/regionais/CODE',
				unidadeFisica : '/'+apiVersion+'/unidadesFisicas/ID',
                unidadeFicticia : '/'+apiVersion+'/unidadesFicticias/ID',
                unidadeAtendimento : '/'+apiVersion+'/unidadesAtendimento/ID',
            },
            //MÓDULO PESSOAS FISICAS
            {
				pessoasFisicas : '/'+apiVersion+'/pessoas/ID',
            },
            //PRÓXIMOS SERVIÇOS
        ]
    });
});



//NOTIFICAÇÕES
app.use('/'+apiVersion+'/fleury/notificacoes',notificacoesFleury); 
app.use('/'+apiVersion+'/wise/notificacoes',notificacoesWise); 
//CONVÊNIOS
app.use('/'+apiVersion+'/convenios',convenios); 
app.use('/'+apiVersion+'/empresas',empresas); 
app.use('/'+apiVersion+'/convenioEmpresas',convenioEmpresas); 
app.use('/'+apiVersion+'/planos',planosSaude); 
app.use('/'+apiVersion+'/coberturas',coberturas); 
//ESTRUTURA-CORPUTATIVA
app.use('/'+apiVersion+'/horariosFuncionamento',horariosFuncionamento); 
app.use('/'+apiVersion+'/marcas',marcas); 
app.use('/'+apiVersion+'/regionais',regionais); 
app.use('/'+apiVersion+'/unidadesFisicas',unidadesFisicas); 
app.use('/'+apiVersion+'/unidadesFicticias',unidadesFicticias); 
app.use('/'+apiVersion+'/unidadesAtendimento',unidadesAtendimento);
//PESSOAS-FISICAS
app.use('/'+apiVersion+'/pessoas',pessoas);


