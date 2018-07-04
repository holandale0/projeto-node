USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_PESS_FIS_s_ContatosPessoaFisicaById]    Script Date: 26/06/2018 14:03:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO








/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_PESS_FIS_s_ContatosPessoaFisicaById
SISTEMA/PROJETO: Agendamento - Integração WISE - Pessoa Fisica
DESCRIÇÃO .....: Busca por contatos de pessoa fisica com base no ID.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/06/2018
MOTIVO.........: Recuperar contatos de pessoa fisica com base no id.
Resultado(s)...: Retornar contatos de pessoa fisica com base no id.
Objetivo(s)....: Retornar contatos de pessoa fisica com base no id.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PARÂMETRO(S):
			NOME       : @ID_PEFI_CD_PESSOA_FISICA INT
			DESCRIÇÃO  : ID da pessoa fisica
            OBRIGATÓRIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_PESS_FIS_s_ContatosPessoaFisicaById]
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


CREATE PROCEDURE [dbo].[pr_CA_PESS_FIS_s_ContatosPessoaFisicaById]


@ID_PEFI_CD_PESSOA_FISICA INT


AS

BEGIN -- [01] Início

SELECT DISTINCT

--EMAIL
CONT.CONT_DS_EMAIL_PAGINA as endereco,
CONT.CONT_IN_RECEBE_COMUNIC as notificacao,
--TELEFONE
CONT.CONT_NR_DDI as ddi,
CONT.CONT_NR_DDD as ddd,
CONT.CONT_NR_TELEFONE_FAX as numero,
CONT.CONT_NR_RAMAL as ramal,
COMU.ID_COMU_CD_MEIO_COMUNICACAO AS tipo,
CONT.CONT_IN_DIVULGACAO_CONTATO as divulgacao

FROM 

PE_CDTB_CONTATO_CONT CONT WITH(NOLOCK)
INNER JOIN PE_CDTB_MEIO_COMUNICACAO_COMU COMU
ON CONT.ID_COMU_CD_MEIO_COMUNICACAO = COMU.ID_COMU_CD_MEIO_COMUNICACAO


WHERE 


CONT.ID_PEFI_CD_PESSOA_FISICA = @ID_PEFI_CD_PESSOA_FISICA
 
  
END -- [01] Fim






GO


