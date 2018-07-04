USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_EST_CORP_s_UnidadeFicticiaById]    Script Date: 12/06/2018 12:22:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO





/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_EST_CORP_s_UnidadeFicticiaById
SISTEMA/PROJETO: Agendamento - Integra��o WISE
DESCRI��O .....: Busca por unidade ficticia com base no id.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 11/06/2018
MOTIVO.........: Recuperar um registro de unidade ficticia com base no id.
Resultado(s)...: Retornar um registro de unidade ficticia com base no id.
Objetivo(s)....: Retornar um registro de unidade ficticia com base no id.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PAR�METRO(S):
			NOME       : @ID_UNFI_CD_UNIDFICTICIA INT
			DESCRI��O  : ID da unidade
            OBRIGAT�RIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_EST_CORP_s_UnidadeFisicaById]
	@ID_UNFI_CD_UNIDFICTICIA = 1
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 11/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integra��o WISE - Estrutura Corporativa
Motivo(S) : Cria��o da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_EST_CORP_s_UnidadeFicticiaById]


@ID_UNFI_CD_UNIDFICTICIA INT


AS

BEGIN -- [01] In�cio

SELECT DISTINCT

UNIFI.ID_UNFI_CD_UNIDFICTICIA as id,
UNIFI.UNFI_DT_INATIVIDADE as ativo,
UNIFI.UNFI_NO_UNIDFICTICIA as nome,
UNIFI.ID_UNID_CD_UNIDADE_WORKFLOW as unidadeAtendimento,
UNIFI.UNFI_IN_AGENDAMENTO as agendamento

FROM 

CP_CDTB_UNIDADE_FICTICIA_UNFI UNIFI WITH(NOLOCK)

--JOIN CC_CDTB_ESCRITORIO_VENDA_ESVE ESVE

--ON UNID.ID_UNID_CD_UNIDADE = ESVE.ID

WHERE 

UNIFI.ID_UNFI_CD_UNIDFICTICIA = @ID_UNFI_CD_UNIDFICTICIA
  
END -- [01] Fim



GO


