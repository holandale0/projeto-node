USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_PESS_FIS_s_ProfissionalSaudeById]    Script Date: 25/06/2018 15:14:02 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO







/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_PESS_FIS_s_ProfissionalSaudeById
SISTEMA/PROJETO: Agendamento - Integração WISE - Pessoa Fisica
DESCRIÇÃO .....: Busca por uma pessoa fisica com base no ID.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/06/2018
MOTIVO.........: Recuperar a pessoa fisica com base no id.
Resultado(s)...: Retornar pessoa fisica com base no id.
Objetivo(s)....: Retornar pessoa fisica com base no id.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PARÂMETRO(S):
			NOME       : @ID_PEFI_CD_PESSOA_FISICA INT
			DESCRIÇÃO  : ID da pessoa fisica
            OBRIGATÓRIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_PESS_FIS_s_ProfissionalSaudeById]
	@ID_PEFI_CD_PESSOA_FISICA = 46764
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 25/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Pessoa Fisica
Motivo(S) : Criação da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_PESS_FIS_s_ProfissionalSaudeById]


@ID_PEFI_CD_PESSOA_FISICA INT


AS

BEGIN -- [01] Início

SELECT DISTINCT

PRSA.PRSA_ST_MEDICO as ativo,
PRSA.ID_CTPF_SL_CATEGORIA as tipo,
PRSA.PRSA_NR_CERTIFICADO as numero,
PRSA.PRSA_DS_UF_ORIGEM_CERTIFICADO as uf,
(SELECT ID_MDFL_CD_MEDICO_FLEURY 
from PE_CDTB_PROFISSIONAL_SAUDE_FLEURY_MDFL 
where ID_PRSA_CD_PROF_SAUDE IN 
(SELECT ID_PRSA_CD_PROF_SAUDE FROM PE_CDTB_PROFISSIONAL_SAUDE_PRSA WHERE ID_PEFI_CD_PESSOA_FISICA = @ID_PEFI_CD_PESSOA_FISICA)) as profissionalFleury


FROM 

PE_CDTB_PROFISSIONAL_SAUDE_PRSA PRSA WITH(NOLOCK)


WHERE 


PRSA.ID_PEFI_CD_PESSOA_FISICA = @ID_PEFI_CD_PESSOA_FISICA

    
  
END -- [01] Fim





GO

