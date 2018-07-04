USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_EST_CORP_s_RegionalById]    Script Date: 11/06/2018 13:52:23 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_EST_CORP_s_RegionalById
SISTEMA/PROJETO: Agendamento - Integra��o WISE
DESCRI��O .....: Busca por regional com base no id.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 11/06/2018
MOTIVO.........: Recuperar um registro de regional com base no id.
Resultado(s)...: Retornar um registro de regional com base no id.
Objetivo(s)....: Retornar um registro de regional com base no id.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PAR�METRO(S):
			NOME       : @ID_ESVE_SL_ESCRITORIO VARCHAR(4)
			DESCRI��O  : Codigo do regional
            OBRIGAT�RIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_EST_CORP_s_RegionalById]
	@ID_ESVE_SL_ESCRITORIO = BA
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 11/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integra��o WISE - Estrutura Corporativa
Motivo(S) : Cria��o da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_EST_CORP_s_RegionalById]


@ID_ESVE_SL_ESCRITORIO VARCHAR(4)


AS

BEGIN -- [01] In�cio

SELECT DISTINCT

ESVE.ID_ESVE_SL_ESCRITORIO as code,
ESVE.ESVE_IN_ATIVO as ativo,
ESVE.ESVE_NM_SIGLA as sigla

FROM 

CC_CDTB_ESCRITORIO_VENDA_ESVE ESVE WITH(NOLOCK)

WHERE 

ESVE.ID_ESVE_SL_ESCRITORIO = @ID_ESVE_SL_ESCRITORIO



    
    
  
END -- [01] Fim


GO


